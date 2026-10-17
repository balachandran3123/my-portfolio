const mongoose = require("mongoose");
require("dotenv").config();
const Project = require("./models/Project");
const projects = require("./data/projects");

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log("Seeded", projects.length, "projects");
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
