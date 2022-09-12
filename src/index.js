// import React from 'react';
import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux';
import Data from './context/data';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} context={Data}>
    <App />
  </Provider >
);

