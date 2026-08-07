import { useState } from "react";

function CrudAdmin() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");

  const agregar = () => {
    if (!nombre) return;

    setUsuarios([
      ...usuarios,
      {
        id: Date.now(),
        nombre,
      },
    ]);

    setNombre("");
  };

  const eliminar = (id) => {
    setUsuarios(usuarios.filter((u) => u.id !== id));
  };

  return (
    <div>
      <h1>CRUD ADMIN</h1>

      <input
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={agregar}>Agregar</button>

      {usuarios.map((u) => (
        <div key={u.id}>
          {u.nombre}

          <button onClick={() => eliminar(u.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default CrudAdmin;
