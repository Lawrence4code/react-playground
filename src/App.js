import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(() => 0); // not need
    setCount(0);
  };
  return (
    <div className="App">
      <h1> {count}</h1>
      <button onClick={() => increment()}> Up </button>
      <button onClick={() => decrement()}> Down </button>
      <button onClick={() => reset()}> Reset </button>
    </div>
  );
};

export default App;
