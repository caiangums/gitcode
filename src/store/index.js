import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {logger as loggerMiddleware} from '_middlewares/logger';

import {authReducer} from './auth';
import {userReducer} from './user';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

function configureStore(preloadedState) {
  let middlewares = [];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(loggerMiddleware);
  }

  middlewares.push(thunkMiddleware);

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares),
  );

  return store;
}

const store = configureStore();

export default store;
