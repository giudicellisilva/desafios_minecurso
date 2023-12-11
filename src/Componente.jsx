import React, { useState } from "react";

export default function Componente() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}
