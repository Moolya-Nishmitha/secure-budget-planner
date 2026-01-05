import { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", form);
      alert("Registered. Now login.");
      window.location.href = "/login";
    } catch {
      alert("Register failed (backend later)");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button>Register</button>
    </form>
  );
}
