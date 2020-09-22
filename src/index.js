import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import AirportContext from './context/AirportConext';

ReactDOM.render(
  <AirportContext>
    <App />
  </AirportContext>,
  document.getElementById('root')
);
