const jwt = require("jsonwebtoken");
const SECRET="secret123";

exports.login=(req,res)=>{
  const token = jwt.sign(
    {user:req.body.username},
    SECRET,{expiresIn:"1d"}
  );
  res.json({token});
};