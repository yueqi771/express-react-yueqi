import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class AuthRoute extends Component {
    componentDidMount() {
        /* 获取用户信息 判断用户权限 */
        axios.get('/api/user/info').then((res) => {
            if(res.status == 200) {
                const publicList = ['/login', 'register'];
                let pathname = this.props.location.pathname;
                
                if(publicList.indexOf(pathname) > -1) {
                    return;
                }
                
                if(res.data.code == 0){

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

export default withRouter(AuthRoute);