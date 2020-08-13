import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';

import createRootReducer from './rootReducer';

const composeEnhancers = typeof window === 'object'
// eslint-disable-next-line no-underscore-dangle
// eslint-disable-next-line no-undef
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // eslint-disable-next-line no-underscore-dangle
  // eslint-disable-next-line no-undef
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const middlewares = [thunk];

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  {},
  composeEnhancers(
    applyMiddleware(
      ...middlewares,
    ),
  ),
);

export default store;
