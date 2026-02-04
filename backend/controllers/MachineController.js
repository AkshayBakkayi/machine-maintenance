const Machine = require("../models/Machine");

exports.add = async (req,res) =>
  res.json(await Machine.create(req.body));

exports.getAll = async (req,res) =>
  res.json(await Machine.find());