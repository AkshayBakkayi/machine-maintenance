import { useState } from "react";
import api from "../api";

export default function Login(){

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [showPass,setShowPass]=useState(false);
  const [loading,setLoading]=useState(false);

  const login=async()=>{
    if(!username || !password)
      return alert("Enter username & password");

    try{
      setLoading(true);

      const res=await api.post("/auth/login",{
        username,
        password
      });

      localStorage.setItem("token",res.data.token);
      alert("Login successful!");
    }catch{
      alert("Invalid credentials");
    }

    setLoading(false);
  };

  // -------- STYLES --------
  const styles={
    page:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      minHeight:"70vh"
    },

    card:{
      background:"white",
      padding:"35px",
      borderRadius:"12px",
      width:"90%",
      maxWidth:"350px",
      textAlign:"center",
      boxShadow:"0 10px 25px rgba(0,0,0,0.3)"
    },

    input:{
      width:"100%",
      padding:"12px",
      margin:"10px 0",
      borderRadius:"6px",
      border:"1px solid #ccc",
      fontSize:"16px"
    },

    button:{
      width:"100%",
      padding:"12px",
      background:"#2563eb",
      color:"white",
      border:"none",
      borderRadius:"6px",
      fontSize:"16px",
      cursor:"pointer",
      marginTop:"10px"
    },

    toggle:{
      fontSize:"14px",
      cursor:"pointer",
      color:"#2563eb",
      textAlign:"right"
    }
  };

  return(
    <div style={styles.page}>
      
      <div style={styles.card}>
        
        <h2 color="black">Login</h2>
        <input
          style={styles.input}
          placeholder="Username"
          value={username}
          onChange={e=>setUsername(e.target.value)}
        />

        <input
          style={styles.input}
          type={showPass ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <div
          style={styles.toggle}
          onClick={()=>setShowPass(!showPass)}
        >
          {showPass ? "Hide" : "Show"} Password
        </div>

        <button
          style={styles.button}
          onClick={login}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}