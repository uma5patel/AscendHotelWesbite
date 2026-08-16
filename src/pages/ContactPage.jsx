import { useState } from "react";
import "./ContactPage.css";

const RECIPIENT_EMAIL = "janki7patel@gmail.com";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    senderEmail: "",
    phone: "",
    subject: "",
    message: "",
  });

  const emailSubject = formData.subject.trim();
  const emailBody = formData.message.trim();

  const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = mailtoLink;
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
            Your name
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              required
            />
          </label>

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
            Phone number
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Optional"
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
            <button type="submit">Send Email</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default ContactPage;
