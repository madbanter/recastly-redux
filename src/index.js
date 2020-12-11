import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import store from './store/store.js';
import handleInputChange from './actions/search.js';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  () => handleInputChange('redux tutorials')(store.dispatch)
);
