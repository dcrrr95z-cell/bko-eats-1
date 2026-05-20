const Stripe = require("stripe");

const STRIPE_API_VERSION = "2026-02-25.clover";

function getAppUrl(req) {
  const configuredUrl = process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL;
  if (configuredUrl) return configuredUrl.replace(/\/$/, "");

  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const protocol = req.headers["x-forwarded-proto"] || "https";
  return `${protocol}://${host}`;
}

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("payload-too-large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function cleanText(value, fallback = "") {
  return String(value || fallback)
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 450);
}

function getOrderAmount(order) {
  const amount = Math.round(Number(order?.total || 0));
  if (!Number.isFinite(amount) || amount < 100) return 0;
  return amount;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "method_not_allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return sendJson(res, 500, { error: "stripe_not_configured" });
  }

  try {
    const { order } = await readJsonBody(req);
    const amount = getOrderAmount(order);

    if (!amount || !Array.isArray(order?.items) || !order.items.length) {
      return sendJson(res, 400, { error: "invalid_order" });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: STRIPE_API_VERSION,
    });
    const appUrl = getAppUrl(req);
    const currency = String(process.env.STRIPE_CURRENCY || "xof").toLowerCase();
    const reference = cleanText(order.reference, `BKO-${Date.now()}`);
    const itemSummary = order.items
      .slice(0, 8)
      .map((item) => `${cleanText(item.name, "Article")} x${Number(item.quantity || 1)}`)
      .join(", ");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: `Commande Bko Eats ${reference}`,
              description: itemSummary || "Commande Bko Eats",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/index.html?payment=stripe-success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/index.html?payment=stripe-cancel`,
      customer_email: order.customer?.email || undefined,
      phone_number_collection: { enabled: true },
      metadata: {
        app: "bko-eats",
        orderReference: reference,
        clientId: cleanText(order.clientId, "local-client"),
        restaurantIds: [...new Set(order.items.map((item) => item.restaurantId).filter(Boolean))]
          .slice(0, 12)
          .join(","),
      },
    });

    return sendJson(res, 200, {
      id: session.id,
      url: session.url,
    });
  } catch (error) {
    return sendJson(res, 500, {
      error: "stripe_checkout_failed",
      message: error.message,
    });
  }
};
