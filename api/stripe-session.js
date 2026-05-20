const Stripe = require("stripe");

const STRIPE_API_VERSION = "2026-02-25.clover";

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return sendJson(res, 405, { error: "method_not_allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return sendJson(res, 500, { error: "stripe_not_configured" });
  }

  const sessionId = String(req.query?.session_id || "");
  if (!sessionId.startsWith("cs_")) {
    return sendJson(res, 400, { error: "invalid_session_id" });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: STRIPE_API_VERSION,
    });
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return sendJson(res, 200, {
      id: session.id,
      status: session.status,
      payment_status: session.payment_status,
      amount_total: session.amount_total,
      currency: session.currency,
      metadata: session.metadata || {},
    });
  } catch (error) {
    return sendJson(res, 500, {
      error: "stripe_session_failed",
      message: error.message,
    });
  }
};
