require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Project = require("./models/Project");
const projectRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");
const sampleProjects = require("./data/projects");

const app = express();
const PORT = process.env.PORT || 5000;
let mongoReady = false;

const fallbackProjects = sampleProjects.map((project, index) => ({
  _id: `local-${index + 1}`,
  ...project,
}));

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, mongo: mongoReady });
});

app.get("/api/projects", async (req, res, next) => {
  if (!mongoReady) {
    return res.json(fallbackProjects);
  }
  next();
});

app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

async function seedProjects() {
  await Project.deleteMany({});
  await Project.insertMany(sampleProjects);
  console.log("Seeded", sampleProjects.length, "projects");
}

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    mongoReady = true;
    console.log("MongoDB connected");
    await seedProjects();
  } catch (err) {
    console.warn("MongoDB not available:", err.message);
    console.warn("Serving sample projects. Contact form still saves to respons_deatils.txt.");
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start();
