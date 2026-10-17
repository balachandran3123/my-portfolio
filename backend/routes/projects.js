const express = require("express");
const Project = require("../models/Project");

const router = express.Router();

router.get("/", async (_req, res) => {
  try {
    const projects = await Project.find().sort({ featured: -1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Could not load projects" });
  }
});

module.exports = router;
