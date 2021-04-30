import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css' // we need to import the new index.css so that we can apply the new styling for the Bob component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
