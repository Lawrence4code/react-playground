import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const button = useRef(null);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const fakeClicker = () => {
    button.current.click();
  };

  return (
    <div className="App">
      <h1> React Playground </h1>
      <h1> {count} </h1>
      <button onClick={fakeClicker}> Fake Counter </button>
      <button ref={button} onClick={increment}>
        Increase count
      </button>
    </div>
  );
};

export default App;
