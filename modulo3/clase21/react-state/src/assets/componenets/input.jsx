import { useState } from "react";


export default function Input() {
    const [texto, setTexto] = useState("")}

    return (
        <div>
            <input type="text" onChange={(e) => setTexto(e.target.value)} />
            <h3>{texto}</h3>
        </div>
    )