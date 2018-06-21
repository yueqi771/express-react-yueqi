import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import BossInfo from './container/bossInfo/bossInfo'
import Login from './container/login/login';
import Register from './container/register/register';
import GeniusInfo from './container/GeniusInfo/geniusInfo';
import AuthRoute from './component/authRoute/authRoute';
import DashBoard from './component/DashBoard/DashBoard';
import http from './utils/http'
import { getUser } from './actions/userAction'
import './static/css/common.css'

class App extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            data: [],
        }
    }
    
    componentDidMount() {
    }
    render() {
        const { data } = this.state
        return (
            <BrowserRouter>
                <div className="router-container">
                    <AuthRoute></AuthRoute>
                    <Switch>
                        <Route path="/bossInfo" component={BossInfo}></Route>
                        <Route path="/geniusInfo" component={GeniusInfo}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route component={DashBoard}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App