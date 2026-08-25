import { useState } from "react";
import { register } from "../../services/auth";

export default function RegisterForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const data = await register(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setMessage("Cuenta creada correctamente");
      setForm({ name: "", email: "", password: "" });
    } catch (error) {
      setMessage(error.response?.data?.message || "No se pudo registrar el usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="register-name">Nombre</label>
        <input id="register-name" name="name" type="text" value={form.name} onChange={handleChange} required />
        <label htmlFor="register-email">Email</label>
        <input id="register-email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <label htmlFor="register-password">Contraseña</label>
        <input id="register-password" name="password" type="password" minLength="6" value={form.password} onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? "Registrando..." : "Registrarse"}</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}
