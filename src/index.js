import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const root = document.getElementById('root');
import companies from './assets/companies';

import {Provider} from 'react-redux';
import configureStore from './redux/configure';

const store = configureStore({
  companies
});

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
