import { useState } from "react";

function CrudVendedor() {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState("");

  const agregar = () => {
    if (!producto) return;

    setProductos([
      ...productos,
      {
        id: Date.now(),
        nombre: producto,
      },
    ]);

    setProducto("");
  };

  const eliminar = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>CRUD VENDEDOR</h1>

      <input
        placeholder="Producto"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
      />

      <button onClick={agregar}>Agregar</button>

      {productos.map((p) => (
        <div key={p.id}>
          {p.nombre}

          <button onClick={() => eliminar(p.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export default CrudVendedor;
