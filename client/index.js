import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import AppContainer from './app';
import reducer from './reducers';
import 'antd-mobile/dist/antd-mobile.css';

// redux chome 插件配置
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {};

const middleWare = applyMiddleware(thunk);

const enhancer = compose(
	middleWare,
	reduxDevtools
)
const store = createStore(reducer, enhancer)

ReactDOM.render(
	<Provider store={store}>
        <AppContainer />
    </Provider>,
	document.getElementById('app')
)