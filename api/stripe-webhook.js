const Stripe = require("stripe");

const STRIPE_API_VERSION = "2026-02-25.clover";

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return sendJson(res, 405, { error: "method_not_allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return sendJson(res, 500, { error: "stripe_webhook_not_configured" });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: STRIPE_API_VERSION,
  });
  const signature = req.headers["stripe-signature"];
  const rawBody = await readRawBody(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (error) {
    return sendJson(res, 400, { error: "invalid_signature", message: error.message });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    console.log("Bko Eats paid order", {
      sessionId: session.id,
      orderReference: session.metadata?.orderReference,
      amountTotal: session.amount_total,
      currency: session.currency,
    });
  }

  return sendJson(res, 200, { received: true });
};
