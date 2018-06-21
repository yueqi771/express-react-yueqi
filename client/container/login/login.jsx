import React,　{ Component } from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../../actions/userAction';
import Form from '../../component/Form'
import bgImg from '../../static/images/yueqi.jpg'
import './login.less'

class Login extends Component {
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            user: "",
            password: "",
        }

    }

    handleLogin() {
        this.props.login(this.props.state)
    }

    register() {
        this.props.history.push('/register')
    }
    render() {
        return(
            <div className="login-wrapper" style={{ background: `url(${bgImg})` }}>
                { this.props.userInfo.redirectTo != '' ? <Redirect to={this.props.userInfo.redirectTo} /> : null}
                
                <div className="login">
                    <h2 className="title">登录</h2>
                
                    <WingBlank className="container">
                        
                        <List>
                            <InputItem className="border" onChange={e => this.props.handleChange('user', e)}>用户名</InputItem>
                            <InputItem type="password" onChange={e => this.props.handleChange('password', e)}>密码</InputItem>
                        </List>

                        <WhiteSpace />
                        <WhiteSpace />
                        { 
                            this.props.userInfo.message != '' ? 
                            <p className="error-tip">{this.props.userInfo.message}</p> : null
                        }
                        <WhiteSpace />
                        <WhiteSpace />
                        <WhiteSpace />
                                                
                        <Button type="primary" className="login-btn" onClick={this.handleLogin}>登录</Button>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.register}>注册</Button>
                    </WingBlank>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
    login: bindActionCreators(loginAction, dispatch)
})

const LoginContainer = Form(connect(mapStateToProps, mapDispatchToProps)(Login))

export default LoginContainer