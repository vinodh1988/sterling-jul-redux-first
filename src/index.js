import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {appstate} from './Redux/reducers/appstate' ;
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const store = createStore(appstate);

ReactDOM.render(
  <Provider store={store}>
    <App title={"Redux Demo"} />
    </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
