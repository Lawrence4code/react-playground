import React, { useState, useMemo } from 'react';
import './App.css';

// const cache = {};
// const multiplyNumberBy10 = (number) => {
//   if (cache[number]) return cache[number];
//   const value = number * 5;
//   console.log(value);
//   cache[number] = value;
// };

function fibonacci(x) {
  if (x <= 0) return 0;
  if (x === 1) return 1;

  return fibonacci(x - 1) + fibonacci(x - 2);
}

const App = () => {
  const [number, setNumber] = useState(10);
  const [isGreen, setIsGreen] = useState(true);
  const fib = useMemo(() => fibonacci(number), [number]);

  return (
    <div className="app">
      <h1> React Playground </h1>
      <button
        onClick={() => setIsGreen()}
        style={{ background: isGreen ? '#01ff70' : '#b10dc9' }}
      >
        UseMemo Example
      </button>
      <h2>
        Fibonnacci of {number} is {fib}
      </h2>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
};

export default App;
