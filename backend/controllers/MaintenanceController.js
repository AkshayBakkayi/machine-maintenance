const Maintenance = require("../models/Maintenance");

exports.create = async (req,res) =>
  res.json(await Maintenance.create(req.body));

exports.upcoming = async (req,res)=>{
  const d = new Date();
  d.setDate(d.getDate()+7);

  res.json(await Maintenance.find({
    scheduledDate:{$lte:d},
    status:"Scheduled"
  }));
};