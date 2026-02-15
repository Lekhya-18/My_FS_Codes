const mongoose = require("mongoose");

const lifeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dreamPlace: { type: String, required: true },
  dreamJob: { type: String, required: true },
  description: { type: String, required: true },
  happy: { type: String, required: true }
});

module.exports = mongoose.model("Life", lifeSchema);
