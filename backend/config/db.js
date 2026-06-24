const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodb+srv://abhirajangane08_db_user:Abhi1070@cluster0.npv6s4c.mongodb.net/?appName=Cluster0")
    .then(() => console.log("MongoDB connected"));
};