import { useState } from "react";
import api from "../api";

export default function Schedule() {
  const [form, setForm] = useState({
    machineId: "",
    type: "",
    scheduledDate: ""
  });

  const submit = async () => {
    await api.post("/maintenance", form);
    alert("Scheduled!");
  };

  /* ===== STYLES ===== */

  const wrapperStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f8",
    padding: "20px"
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "420px",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center"
  };

  const inputStyle = {
    width: "100%",
    margin: "10px 0",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box"
  };

  const buttonStyle = {
    width: "100%",
    marginTop: "15px",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#22c55e",
    color: "white",
    fontSize: "16px",
    cursor: "pointer"
  };

  const titleStyle = {
    marginBottom: "20px"
  };

  /* ===== UI ===== */

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Schedule Maintenance</h2>

        <input
          style={inputStyle}
          placeholder="Machine ID"
          onChange={e => setForm({ ...form, machineId: e.target.value })}
        />

        <input
          style={inputStyle}
          placeholder="Type (Preventive)"
          onChange={e => setForm({ ...form, type: e.target.value })}
        />

        <input
          style={inputStyle}
          type="date"
          onChange={e => setForm({ ...form, scheduledDate: e.target.value })}
        />

        <button style={buttonStyle} onClick={submit}>
          Submit
        </button>
      </div>
    </div>
  );
}
