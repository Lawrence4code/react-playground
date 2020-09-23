import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const count = useRef(0);
  const [countState, setCountState] = useState(0);

  useEffect(() => {
    count.current = 1;
    console.log('Ref ' + count.current);
  }, []);

  useEffect(() => {
    setCountState(1);
    console.log('State ' + countState);
  }, [countState]);

  return (
    <div className="App">
      <h1> React Playground </h1>
    </div>
  );
};

export default App;
