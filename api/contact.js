export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const mail = await fetch("https://formsubmit.co/ajax/balachandran3123@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: "Portfolio contact form",
      }),
    });

    if (!mail.ok) {
      return res.status(500).json({ error: "Could not save message" });
    }

    return res.status(201).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Could not save message" });
  }
}
