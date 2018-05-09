import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import App from './app';
import reducer from './reducers'

// redux chome 插件配置
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{};

const middleWare = applyMiddleware(thunk);

const enhancer = compose(
    middleWare,
    reduxDevtools
)
const store = createStore(reducer, enhancer)

store.subscribe((render) => {
    console.log(store.getState())
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
)


