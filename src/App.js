import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const button = useRef(null);

  useEffect(() => {
    button.current.click();
  }, []);
  return (
    <div className="App">
      <h1> React Playground </h1>
      <button
        ref={button}
        onClick={() => {
          console.log('button clicked');
        }}
      >
        A button
      </button>
    </div>
  );
};

export default App;
