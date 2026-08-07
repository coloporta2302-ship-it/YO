import { useEffect } from 'react'
import axios from 'axios'
import "./App.css"

function App() {

  useEffect(() => {
   axios.get("https://jsonplaceholder.typicode.com/users")
   console.log(data);
  })
  .catch((error)) 
    console.log(error);
  }
   console.log("el componente se renderizo")
  return (
      <h1>Hola mundo</h1>
  )


export default App


