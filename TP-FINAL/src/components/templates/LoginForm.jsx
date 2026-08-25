import { useState } from "react";
import { login } from "../../services/auth";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
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
      const data = await login(form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setMessage(`Bienvenido/a, ${data.user.name}`);
    } catch (error) {
      setMessage(error.response?.data?.message || "No se pudo iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="login-email">Email</label>
        <input id="login-email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <label htmlFor="login-password">Contraseña</label>
        <input id="login-password" name="password" type="password" value={form.password} onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? "Ingresando..." : "Iniciar sesión"}</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
}
