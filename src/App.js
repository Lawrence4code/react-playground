import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// const cache = {};
// const multiplyNumberBy10 = (number) => {
//   if (cache[number]) return cache[number];
//   const value = number * 5;
//   console.log(value);
//   cache[number] = value;
// };

// function fibonacci(x) {
//   if (x <= 0) return 0;
//   if (x === 1) return 1;

//   return fibonacci(x - 1) + fibonacci(x - 2);
// }

const App = () => {
  const [number, setNumber] = useState(0);
  const [plusOne, setPlusOne] = useState(0);
  const add1 = useCallback((x) => {
    console.log('Here ', x);
    return x + 1;
  }, []);

  useEffect(() => {
    setPlusOne(add1(number));
  }, [add1, number]);

  return (
    <div className="app">
      <h1> React Playground </h1>

      <h2>{number}</h2>
      <h2>{plusOne}</h2>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
};

export default App;
