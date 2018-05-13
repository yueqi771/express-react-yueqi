import React,　{ Component } from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import bgImg from '../../static/images/yueqi.jpg'
import './login.less'

class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login() {
        this.props.history.push('/register')
    }
    render() {
        return(
            <div className="login-wrapper" style={{ background: `url(${bgImg})` }}>

                <div className="login">
                    <h2 className="title">登录</h2>
                
                    <WingBlank className="container">
                        
                        <List>
                            <InputItem className="border">用户名</InputItem>
                            <InputItem>密码</InputItem>
                        </List>

                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                                                
                        <Button type="primary" className="login-btn">登录</Button>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.login}>注册</Button>
                    </WingBlank>
                </div>
            </div>
        )
    }
}

export default Login