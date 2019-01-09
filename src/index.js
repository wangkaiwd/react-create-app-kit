import React from 'react';
import ReactDOM from 'react-dom';
import Page from '@/app/router';
import * as serviceWorker from './serviceWorker';
import "styles/reset"
import "styles/theme"
import "animate.css"
import store from 'store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
