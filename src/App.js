import React, { useContext } from 'react';

import './App.css';
import { AirportContext } from './context/AirportConext';

const App = () => {
  const { airports, removeAirport } = useContext(AirportContext);
  return (
    <div className="App">
      <h1> Worst Airports in Europe </h1>
      <ul>
        {airports.map((airport) => (
          <li key={airport.name}>
            {airport.name}
            <button
              onClick={() => {
                removeAirport(airport.name);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
