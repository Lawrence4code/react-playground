import React, { createContext, useState } from 'react';

import airportsList from '../airportsData';

export const AirportContext = createContext(null);

export default ({ children }) => {
  const [airports, setAirports] = useState(airportsList);

  const store = {
    airports,
    removeAirport: (name) => {
      setAirports((prevState) => {
        console.log({ prevState });
        return prevState.filter((airport) => airport.name !== name);
      });
    },
  };
  return (
    <AirportContext.Provider value={store}>{children}</AirportContext.Provider>
  );
};
