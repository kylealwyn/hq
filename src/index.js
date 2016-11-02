import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import '../node_modules/flexxed/dist/flexxed.min.css';
import './index.scss';

import configureStore from './redux/configure';
import companies from './assets/companies';
const store = configureStore({
  companies
});

const root = document.getElementById('root');
import App from './App';
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      root
    );
  });
}
