import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { accountReducer } from './components/reducers/Account';
import { bounsReducer } from './components/reducers/Bonus';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
const store = createStore(combineReducers({
  account: accountReducer,
  bonus: bounsReducer
}), applyMiddleware(logger, thunk));
// reducer

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
