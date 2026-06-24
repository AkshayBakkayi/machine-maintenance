const express=require("express");
const cors=require("cors");
const db=require("./config/db");

db();
const app=express();

app.use(cors());
app.use(express.json());

app.use("/machines",require("./routes/MachineRoutes"));
app.use("/maintenance",require("./routes/MaintenanceRoutes"));
app.use("/auth",require("./routes/AuthRoutes"));

app.listen(4000,()=>console.log("Backend running 4000"));