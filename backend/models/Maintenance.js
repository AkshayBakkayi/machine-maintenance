const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Maintenance",
  new mongoose.Schema({
    machineId: String,
    type: String,
    scheduledDate: Date,
    completedDate: Date,
    status: { type: String, default: "Scheduled" },
    technician: String,
    notes: String
  })
);