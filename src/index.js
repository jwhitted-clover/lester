import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { storePromise } from './store';
import { App } from './components/App';

storePromise.then(store => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
});
