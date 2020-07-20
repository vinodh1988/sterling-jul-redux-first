import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {appstate} from './Redux/reducers/appstate' ;
import { createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

//import thunk from 'redux-thunk';
//import { readPeopleAction } from './Redux/actions/peopleAction';
import { rootSaga } from './Redux/Saga/root';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(appstate,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
store.dispatch({type:"PEOPLE_READ_ACTION"});

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
