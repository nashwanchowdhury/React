import { useState } from "react";


export default function Counter () {
    const [count, setCount] = useState(0);

function increment () {
    setCount(count + 1);

}

function decrement () {
    setCount(count - 1);
}

return (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={increment}>Increase Count</button>
    <button onClick={decrement}>Decrease Count</button>
    </div>
)




}