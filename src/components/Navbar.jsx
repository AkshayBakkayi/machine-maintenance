import { Link, useLocation } from "react-router-dom";

export default function Navbar(){
  const location = useLocation();

  const styles={
    nav:{
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      padding:"15px 40px",
      background:"#2f4f5c",
      color:"white",
      position:"sticky",
      top:0,
      zIndex:10
    },

    logo:{
      fontSize:"22px",
      fontWeight:"bold"
    },

    links:{
      display:"flex",
      gap:"20px"
    },

    link:(path)=>({
      color: location.pathname===path ? "#38bdf8" : "white",
      textDecoration:"none",
      fontWeight:"500",
      padding:"6px 10px",
      borderRadius:"6px",
      transition:"0.3s"
    })
  };

  return(
    <div style={styles.nav}>
      <div style={styles.logo}>Maintenance System</div>
      <div style={styles.links}>
        <Link style={styles.link("/")} to="/">Home</Link>
        <Link style={styles.link("/machines")} to="/machines">Machines</Link>
        <Link style={styles.link("/engineers")} to="/engineers">Engineers</Link>
        <Link style={styles.link("/login")} to="/login">Login</Link>
      </div>
    </div>
  );
}