import '@react-qml/cli/hot';

import { render } from 'react-qml';
import * as React from 'react';

import App from './App';
import makeStore, { history } from './store/makeStore';
import { QQmlComponent } from 'react-qml/dist/components/QtQml';

const store = makeStore();

// setup HMR in development
// if (process.env.NODE_ENV !== 'production') {
//   console.log('WebSocket', Object.keys(WebSocket))
//   const ws = new WebSocket('ws://localhost:8081/hot');

//   ws.onopen = () => {
//     console.log('[HMR] Client connected');
//   };

//   ws.onerror = error => {
//     console.log('WS ERROR')
//     console.error(`[HMR] Client could not connect to the server`, error);
//   };
// }

export default function renderRoot(root: QQmlComponent) {
  render(<App store={store} history={history} />, root);
  console.log('rendering App!!!')
  // if (module.hot) {
  //   module.hot.accept('./App', () => {
  //     console.log('WE ARE HOT TOTTIES BOYS')
  //     const NextApp = require('./App').default;
  //     render(<NextApp store={store} history={history} />, root);
  //   });
  // }
}; 
