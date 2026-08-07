import { useState } from "react";

function CrudUser() {
  const [perfil, setPerfil] = useState({
    nombre: "",
    email: "",
  });

  const guardar = () => {
    alert("Perfil actualizado");
  };

  return (
    <div>
      <h1>CRUD USER</h1>

      <input
        placeholder="Nombre"
        value={perfil.nombre}
        onChange={(e) =>
          setPerfil({
            ...perfil,
            nombre: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        value={perfil.email}
        onChange={(e) =>
          setPerfil({
            ...perfil,
            email: e.target.value,
          })
        }
      />

      <button onClick={guardar}>Guardar</button>
    </div>
  );
}

export default CrudUser;
