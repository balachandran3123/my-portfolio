const fs = require("fs");
const path = require("path");
const express = require("express");
const Message = require("../models/Message");

const router = express.Router();
const filePath = path.join(__dirname, "..", "respons_deatils.txt");

function saveToFile({ name, email, message }) {
  const entry = [
    "----------------------------------------",
    `Date: ${new Date().toLocaleString()}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Message: ${message}`,
    "",
  ].join("\n");
  fs.appendFileSync(filePath, entry, "utf8");
}

router.post("/", async (req, res) => {
  try {
    const name = req.body.name?.trim();
    const email = req.body.email?.trim();
    const message = req.body.message?.trim();

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    saveToFile({ name, email, message });

    let id = null;
    try {
      const saved = await Message.create({ name, email, message });
      id = saved._id;
    } catch (_err) {
      // MongoDB is optional; the text file already has the message.
    }

    res.status(201).json({ ok: true, id });
  } catch (err) {
    res.status(500).json({ error: "Could not save message" });
  }
});

module.exports = router;
