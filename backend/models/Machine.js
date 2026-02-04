const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Machine",
  new mongoose.Schema({
    name: String,
    type: String,
    location: String,
    status: { type: String, default: "Running" },
    previousServiceDate: Date,
    nextServiceDate: Date ,
  })
);