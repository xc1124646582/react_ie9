import React from "react";
import { render } from "react-dom";
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducer from '../reducer/index.js'
import thunk from'redux-thunk'
import history from './history';
import App from "./app";
import "./index.less";


let store=createStore(reducer,applyMiddleware(thunk))

render(
	<Provider store={store}>
    <App/>
  </Provider>, document.getElementById('app'))