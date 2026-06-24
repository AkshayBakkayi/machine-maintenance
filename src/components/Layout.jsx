import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import bgImage from "../assets/machineImage.jpg"; // ✅ IMPORT

export default function Layout(){

  const styles = {
    page:{
      minHeight:"100vh",
      display:"flex",
      flexDirection:"column",
      backgroundImage:`url(${bgImage})`, // ✅ USE HERE
      backgroundSize:"cover",
      backgroundPosition:"center"
    },

    body:{
      flex:1,
      background:"rgba(0,0,0,0.6)",
      color:"white",
      padding:"20px"
    }
  };

  return (
    <div style={styles.page}>
      <Header/>

      <div style={styles.body}>
        <Outlet/>
      </div>

      <Footer/>
    </div>
  );
}