const r=require("express").Router();
const c=require("../controllers/MachineController");

r.post("/",c.add);
r.get("/",c.getAll);

module.exports=r;