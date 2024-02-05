import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = ()=>{
    if(!(count < 20)) return;
    setCount(count + 1)
  }
  const decrement = ()=>{
    if(!(count > 0)) return;
    setCount(count - 1)
  }

  return (
    <>
      <h1>COUNT: {count}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <p>The current value of counter is {count}</p>
    </>
  );
}

export default App;
