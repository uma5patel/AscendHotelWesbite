import { useState } from "react";
import "./ContactPage.css";

const RECIPIENT_EMAIL = "jankipatel@ascendhotelgroup.com";

function ContactPage() {
  const [formData, setFormData] = useState({
    senderEmail: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "sending", message: "Sending..." });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail: formData.senderEmail,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Email could not be sent right now.");
      }

      setFormData({
        senderEmail: "",
        subject: "",
        message: "",
      });
      setStatus({
        type: "success",
        message: "Your message was sent successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Email could not be sent right now.",
      });
    }
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-kicker">Contact Ascend Hotels</p>
        <h1>Send an Email</h1>
        <p className="contact-intro">
          Fill out the details below to create a properly formatted message for
          {RECIPIENT_EMAIL}.
        </p>
      </section>

      <section className="contact-form-section" aria-labelledby="email-form-title">
        <div className="contact-section-heading">
          <p>Email content</p>
          <h2 id="email-form-title">Compose your message</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your email
            <input
              name="senderEmail"
              type="email"
              value={formData.senderEmail}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Subject
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Hotel inquiry"
              required
            />
          </label>

          <label className="message-field">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="8"
              placeholder="Write the email content here"
              required
            />
          </label>

          <div className="contact-actions">
            <button type="submit" disabled={status.type === "sending"}>
              {status.type === "sending" ? "Sending..." : "Send Email"}
            </button>
          </div>

          {status.message ? (
            <p className={`contact-status contact-status-${status.type}`} role="status">
              {status.message}
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
