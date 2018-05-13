import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authRoute/authRoute'
import http from './utils/http'
import { getUser } from './actions/userAction'
import './static/css/common.css'

class App extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            data: []
        }
    }
    
    componentDidMount() {
    }
    render() {
        const { data } = this.state
        const { userInfo } = this.props;
        return (
            <BrowserRouter>
                <div className="router-container">
                    <AuthRoute></AuthRoute>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </div>
            </BrowserRouter>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDispatchToProps = (dispatch) => ({
    getUser: bindActionCreators(getUser, dispatch)
})
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
export default AppContainer