import React,　{ Component } from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { register } from '../../actions/userAction'
import bgImg from '../../static/images/yueqi.jpg'
import './register.less'

class Register extends Component {
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

        console.log(this.props.userInfo)

        this.state = {
            user: '',
            password: '',
            repassword: '',
        }
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleRegister() {
        this.props.register(this.state)
    }

    register() {
        this.props.history.push('/login')
    }
    render() {
        return(
            <div className="register-wrapper" style={{ background: `url(${bgImg})` }}>
                <div className="register">
                    <h2 className="title">注册</h2>
                    
                    <WingBlank className="container">
                        <List>
                            <InputItem className="border" onChange={e => this.handleChange('user', e)}>用户名</InputItem>
                            <InputItem type="password" className="border" onChange={e => this.handleChange('password', e)}>密码</InputItem>
                            <InputItem type="password" className="border" onChange={e => this.handleChange('repassword', e)}>确认密码</InputItem>
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

                        <Button type="primary" className="login-btn" onClick={this.handleRegister}>注册</Button>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.register}>登录</Button>
                    </WingBlank>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const mapDisPatchToProps = (dispatch) =>　({
    register: bindActionCreators(register, dispatch)
})

const regiserContainer = connect(mapStateToProps, mapDisPatchToProps)(Register)

export default regiserContainer