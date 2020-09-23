import React, { createContext, useReducer } from 'react';

import airportsList from '../airportsData';

export const AirportContext = createContext(null);

function reducer(state, action) {
  console.log('action', action);
  switch (action.type) {
    // case 'removeVisited':
    //   console.log('removeVisited case');
    //   return {
    //     airports: state.airports.map((airport) => {
    //       if (airport.id === action.value)
    //         return {
    //           ...airport,
    //           visited: false,
    //         };
    //       return airport;
    //     }),
    //   };
    // case 'addVisited':
    //   console.log('addVisited case');
    //   return {
    //     airports: state.airports.map((airport) => {
    //       if (airport.id === action.value) {
    //         return {
    //           ...airport,
    //           visited: true,
    //         };
    //       }
    //       return airport;
    //     }),
    //   };
    case 'toggleVisited':
      console.log('toggleVisited case');
      return {
        airports: state.airports.map((airport) => {
          if (airport.id === action.value) {
            return {
              ...airport,
              visited: !airport.visited,
            };
          }
          return airport;
        }),
      };
    default:
      console.log('default case');
      return state;
  }
}

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { airports: airportsList });

  return (
    <AirportContext.Provider value={{ state, dispatch }}>
      {children}
    </AirportContext.Provider>
  );
};
