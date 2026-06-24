import { useEffect, useState } from "react";
import api from "../api";

export default function Machines(){

  // -------- FORM STATE --------
  const emptyForm={
    name:"",
    type:"",
    status:"",
    location:"",
    previousServiceDate:"",
    nextServiceDate:""
  };

  const [machines,setMachines]=useState([]);
  const [form,setForm]=useState(emptyForm);
  const [editId,setEditId]=useState(null);

  // -------- LOAD MACHINES --------
  const loadMachines=()=>{
    api.get("/machines")
      .then(res=>setMachines(res.data))
      .catch(()=>setMachines([]));
  };

  useEffect(loadMachines,[]);

  // -------- ADD / UPDATE --------
  const submit=async()=>{
    if(!form.name) return alert("Name required");

    if(editId){
      await api.put(`/machines/${editId}`,form);
      setEditId(null);
    }else{
      await api.post("/machines",form);
    }

    setForm(emptyForm);
    loadMachines();
  };

  // -------- EDIT --------
  const editMachine=(m)=>{
    setForm({
      ...m,
      previousServiceDate:
        m.previousServiceDate?.split("T")[0] || "",
      nextServiceDate:
        m.nextServiceDate?.split("T")[0] || ""
    });
    setEditId(m._id);
  };

  // -------- DELETE --------
  const deleteMachine=async(id)=>{
    await api.delete(`/machines/${id}`);
    loadMachines();
  };

  // -------- AUTO NEXT SERVICE --------
  const handlePrevDate=(date)=>{
    const prev=new Date(date);
    const next=new Date(prev);
    next.setDate(next.getDate()+30);

    setForm({
      ...form,
      previousServiceDate:date,
      nextServiceDate:next.toISOString().split("T")[0]
    });
  };

  // -------- STYLES --------
  const card={
    background:"white",
    padding:"20px",
    margin:"15px",
    borderRadius:"12px",
    width:"280px",
    boxShadow:"0 8px 20px rgba(0,0,0,0.25)",
    textAlign:"left"
  };

  const btn={
    padding:"7px 14px",
    margin:"5px",
    border:"none",
    borderRadius:"6px",
    cursor:"pointer"
  };

  const editBtn={...btn,background:"#38bdf8",color:"white"};
  const delBtn={...btn,background:"#ef4444",color:"white"};
  const addBtn={...btn,background:"#22c55e",color:"white"};

  // -------- UI --------
  return(
    <div>

      <h2 style={{textAlign:"center"}}>Machines</h2>

      {/* FORM */}
      <div style={{textAlign:"center",marginBottom:"20px"}}>
        <input placeholder="Name"
          value={form.name}
          onChange={e=>setForm({...form,name:e.target.value})}/>

        <input placeholder="Type"
          value={form.type}
          onChange={e=>setForm({...form,type:e.target.value})}/>

        <input placeholder="Status"
          value={form.status}
          onChange={e=>setForm({...form,status:e.target.value})}/>

        <input placeholder="Location"
          value={form.location}
          onChange={e=>setForm({...form,location:e.target.value})}/>

        <br/>

        <label>Previous Service:</label>
        <input type="date"
          value={form.previousServiceDate}
          onChange={e=>handlePrevDate(e.target.value)}/>

        <label>Next Service:</label>
        <input type="date"
          value={form.nextServiceDate}
          onChange={e=>setForm({...form,nextServiceDate:e.target.value})}/>

        <br/>

        <button style={addBtn} onClick={submit}>
          {editId ? "Update Machine" : "Add Machine"}
        </button>
      </div>

      {/* MACHINE CARDS */}
      <div style={{
        color:"black",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center"
      }}>
        {machines.map(m=>(
          <div style={card} key={m._id}>
            <h3>{m.name}</h3>

            <p><b>Type:</b> {m.type}</p>
            <p><b>Status:</b> {m.status}</p>
            <p><b>Location:</b> {m.location}</p>

            <p>
              <b>Previous Service:</b><br/>
              {m.previousServiceDate
                ? new Date(m.previousServiceDate).toLocaleDateString()
                : "N/A"}
            </p>

            <p>
              <b>Next Service:</b><br/>
              {m.nextServiceDate
                ? new Date(m.nextServiceDate).toLocaleDateString()
                : "N/A"}
            </p>

            <button style={editBtn} onClick={()=>editMachine(m)}>
              Edit
            </button>

            <button style={delBtn} onClick={()=>deleteMachine(m._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}