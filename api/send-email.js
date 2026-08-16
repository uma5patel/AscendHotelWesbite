const RECIPIENT_EMAIL = "janki7patel@gmail.com";

function sendJson(response, statusCode, payload) {
  response.status(statusCode).json(payload);
}

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  const subject = clean(request.body?.subject);
  const message = clean(request.body?.message);
  const senderEmail = clean(request.body?.senderEmail);

  if (!senderEmail || !subject || !message) {
    sendJson(response, 400, {
      error: "Please provide your email, subject, and message.",
    });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "Ascend Hotels <onboarding@resend.dev>";

  if (!apiKey) {
    sendJson(response, 500, { error: "Email service is not configured." });
    return;
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [RECIPIENT_EMAIL],
        subject,
        text: message,
        reply_to: senderEmail,
      }),
    });

    if (!resendResponse.ok) {
      sendJson(response, 502, { error: "Email could not be sent right now." });
      return;
    }
  } catch {
    sendJson(response, 502, { error: "Email could not be sent right now." });
    return;
  }

  sendJson(response, 200, { ok: true });
}
