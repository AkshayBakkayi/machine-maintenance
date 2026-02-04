const r=require("express").Router();
const c=require("../controllers/AuthController");

r.post("/login",c.login);

module.exports=r;