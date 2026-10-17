import { useState } from "react";

const empty = { name: "", email: "", message: "" };
const CONTACT_EMAIL = "balachandran3123@gmail.com";

async function readJson(res) {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

async function sendToApi(form) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  const data = await readJson(res);
  return Boolean(res.ok && data && data.ok);
}

async function sendToEmail(form) {
  const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      message: form.message,
      _subject: "Portfolio contact form",
    }),
  });
  const data = await readJson(res);
  return Boolean(res.ok && data);
}

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  function update(event) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });

    try {
      const saved = (await sendToApi(form)) || (await sendToEmail(form));
      if (!saved) {
        throw new Error(`Could not send. Please email ${CONTACT_EMAIL}`);
      }

      setForm(empty);
      setStatus({ type: "ok", text: "Message sent. I will get back to you soon." });
    } catch (err) {
      setStatus({ type: "err", text: err.message });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s talk about a project.</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p>
              Open to conversations about Laravel, PHP, and web applications.
              Reach me directly or use the form.
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <strong>{CONTACT_EMAIL}</strong>
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:6369349596">
                <strong>6369349596</strong>
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/balachandran-65/clinic"
                target="_blank"
                rel="noreferrer"
              >
                <strong>github.com/balachandran-65</strong>
              </a>
            </p>
          </div>
          <form className="form" onSubmit={submit}>
            <label>
              Name
              <input name="name" value={form.name} onChange={update} required />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                required
              />
            </label>
            <button className="btn btn-primary" type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send message"}
            </button>
            {status.text && (
              <p className={`status ${status.type}`}>{status.text}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
