export default function Footer(){

  const styles = {
    footer:{
      background:"#0f172a",
      color:"white",
      textAlign:"center",
      padding:"15px",
      marginTop:"auto"
    },
    small:{
      fontSize:"14px",
      opacity:"0.8"
    }
  };

  return(
    <div style={styles.footer}>
      <div>© 2026 Machine Maintenance System</div>
      <div style={styles.small}>
        Built for Smart Manufacturing ⚙️
      </div>
    </div>
  );
}