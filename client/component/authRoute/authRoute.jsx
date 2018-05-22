import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { update_user } from '../../actions/userAction'
import axios from 'axios';

class AuthRoute extends Component {
    componentDidMount() {
        console.log(this.props)
        /* 获取用户信息 判断用户权限 */
        axios.get('/api/user/info').then((res) => {
            if(res.status == 200) {
                const publicList = ['/login', '/register'];
                let pathname = this.props.location.pathname;
                
                if(publicList.indexOf(pathname) > -1) {
                    return;
                }
                
                if(res.data.code == 1){
                    // 登录状态下更新用户信息
                    this.props.dispatch(update_user(res.data.data))
                    this.props.history.push('/bossInfo')
                    
                }else{
                    // 跳转到首页
                    this.props.history.push('/login')
                }
            }
        })
    }

    render() {
        return null
    }
}


const AuthRouteContainer = connect()(AuthRoute)

export default withRouter(AuthRouteContainer);