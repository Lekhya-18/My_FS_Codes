const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Life = require("./files/life");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.post("/submit", async (req, res) => {
  try {
    const life = await Life.create(req.body);
    res.json(life);
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});

app.get("/all", async (req, res) => {
  try {
    const allLives = await Life.find();
    res.json(allLives);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
