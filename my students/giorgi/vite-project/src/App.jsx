import { useState } from "react";

export default function App() {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <div className=" flex justify-center items-center h-100">
            <h1>{count}</h1>
            <br />
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
}