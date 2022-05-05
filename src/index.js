import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//ReactDom: rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

//add <App /> to <div id="root"></div> in public/index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
