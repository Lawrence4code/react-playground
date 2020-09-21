import React, { useState, useEffect } from 'react';
import './App.css';

const Name = ({ name }) => {
  useEffect(() => {
    console.log('name changed');
  }, [name]);
  return <h2> {name} </h2>;
};

const App = () => {
  const [name, setName] = useState('Default Name');
  return (
    <div className="App">
      <h2> ~ Change the name ~ </h2>
      <Name name={name} />
      <button
        onClick={() => {
          setName('Whatever Doe');
        }}
      >
        Change to whatever
      </button>
      <button
        onClick={() => {
          setName('John Doe');
        }}
      >
        Change to John
      </button>
    </div>
  );
};

export default App;
