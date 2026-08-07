import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({
    nombre: '',
    precio: 0,
  })

  const handleInputChange = (e) => {
    setCurrentProduct({
      ...currentProduct,
      [e.target.name]: e.target.value,
    })
  }

   
 
  return (
    <>
    <h1>Hola, mundo</h1>
    <h2>crear productos</h2>
    <form>
      <label>Nombre</label>
      <input type="text" name="nombre" value={currentProduct.nombre} onChange={handleInputChange} />
      <label>Precio</label>
      <input type="number" name="precio" value={currentProduct.precio} onChange={handleInputChange} />
      <button type="submit">AGREGAR</button>
    </form>
    {products.length > 0 && (
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.nombre} - ${product.precio}</li>
        ))}
      </ul>
    )}
    </>
  )
}

export default App
