import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import {Provider} from 'react-redux';
import store from '../src/store/store';
const browserHistory = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router history={browserHistory}>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
