import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import {
  connectRouter,
  routerMiddleware as createRouterMiddleware,
} from 'connected-react-router';
import { createMemoryHistory } from 'history';
import reduxThunk from 'redux-thunk';

// import rootEpic from './rootEpic';
import rootReducer, { RootState } from './rootReducer';
import { logObject } from '../utility/logging'

const history = createMemoryHistory();
// const epicMiddleware = createEpicMiddleware(rootEpic);
const routerMiddleware = createRouterMiddleware(history);
const useReduxDevTools = false
// dev tools
// to use custom remote-dev server, uncomment the first 2 options
const devToolsConfig = {
  hostname: process.env.DEV_SERVER_HOST || 'localhost',
  port: 8000,
  realtime: process.env.NODE_ENV !== 'production',
  suppressConnectErrors: false,
}
console.log('Dev Tools Config')
logObject(devToolsConfig)
const composeEnhancers = useReduxDevTools ? composeWithDevTools(devToolsConfig) : compose

// then router
const rootReducerWithRouter = connectRouter(history)(rootReducer);

// finally composeEnhancers
const enhancers = composeEnhancers(
  applyMiddleware(
    reduxThunk,
    routerMiddleware
  )
);

export { history };
export default (initialState?: RootState) => {
  const store = createStore(rootReducerWithRouter, initialState, enhancers);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default;
      store.replaceReducer(connectRouter(history)(nextReducer));
    });
    // module.hot.accept('./rootEpic', () => {
    //   const rootEpic = require('./rootEpic').default;
    //   epicMiddleware.replaceEpic(rootEpic);
    // });
  }

  return store;
};
