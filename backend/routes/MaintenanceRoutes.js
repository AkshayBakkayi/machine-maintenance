const r=require("express").Router();
const c=require("../controllers/MaintenanceController");

r.post("/",c.create);
r.get("/upcoming",c.upcoming);

module.exports=r;