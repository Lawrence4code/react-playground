import React, { useContext } from 'react';

import './App.css';
import { AirportContext } from './context/AirportConext';

const App = () => {
  const { state, dispatch } = useContext(AirportContext);
  console.log('state', state);
  return (
    <div className="App">
      <h1> Worst Airports in Europe </h1>
      <ul>
        {state.airports.map((airport) => (
          <li
            key={airport.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '30%',
              margin: '0 auto',
            }}
          >
            <img width="420" src={airport.photo} alt={airport.name} />
            <span> {airport.name} </span>
            <button
              onClick={() => {
                dispatch({ type: 'toggleVisited', value: airport.id });
              }}
            >
              {airport.visited ? 'Remove visited' : 'Mark as visited'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
