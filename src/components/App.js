import React from "react";
import { useState } from "react";
import "../style.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter>0) {
      setCounter(counter - 1);
    }else{
      window.alert("count reached 0");
    }
  };

  return (
    <>
      <div className="head">Counter : </div>
      <div className="count">{counter}</div>
      <div className="btn">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
