import rootReducer from './reducers';
import {createStore, compose} from 'redux';

// enable redux devtools... can this be done with Webpack instead?
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default (initialState) => {
  console.log(initialState);
  const store =createStore(rootReducer, initialState, enhancers);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers'));
    });
  }

  return store
};
