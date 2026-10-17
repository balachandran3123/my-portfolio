const fs = require("fs");
const path = require("path");
const express = require("express");

const router = express.Router();
const filePath = path.join(__dirname, "..", "respons_deatils.txt");

router.post("/", (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const entry = [
      "----------------------------------------",
      `Date: ${new Date().toLocaleString()}`,
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Message: ${message.trim()}`,
      "",
    ].join("\n");

    fs.appendFileSync(filePath, entry, "utf8");

    res.status(201).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: "Could not save message" });
  }
});

module.exports = router;
