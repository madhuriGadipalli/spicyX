import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConnectJsx } from './SpicyX/Container';
import { CombineReducers } from './SpicyX/Reducers';
const store = createStore(CombineReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
ReactDOM.render(
  <Provider store={store}>
    <ConnectJsx />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
