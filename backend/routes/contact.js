const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const saved = await Message.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    res.status(201).json({ ok: true, id: saved._id });
  } catch (err) {
    res.status(500).json({ error: "Could not send message" });
  }
});

module.exports = router;
