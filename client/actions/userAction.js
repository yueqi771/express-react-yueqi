import axios from 'axios';
import qs from 'qs';

export const register_success = (userInfo) => { return { type: 'REGISTER_SUCCESS', data: userInfo }};
export const login_success = (userInfo) => { return { type: 'LOGIN_SUCCESS', data: userInfo }};
export const error_message = (msg) => { return { type: 'ERROR_MESSAGE', message: msg } };
export const logout = (userInfo) => { type: 'LOGOUT', userInfo };
// 更新用户信息
export const update_user = (userInfo) => { return { type: 'UPDATE_USER', data: userInfo } }

// 注册
export const register = ({user, password, repassword, type}) => {
    if(user == '' || password == ''){
        return error_message('请输入用户名或密码')
    }
    if(password !== repassword){
        return error_message('请输入相同的密码')
    }

    return dispatch => {
        axios.post('/api/user/register', qs.stringify({
            user, password, type
        })).then((res) => {
            if(res.data.code === 1){
                dispatch(register_success({user, password, type}))
            }else{
                dispatch(error_message(res.data.message))
            }
        })
    }
}

// 登录
export const loginAction = ({user, password}) => {
    if(!user || !password){
        return error_message('请输入用户名或密码')
    }
    return dispatch => {
        axios.post('/api/user/login', qs.stringify({ 
            user, password 
        })).then((res) => {
            if(res.data.code === 1){
                dispatch(login_success(res.data.data))
            }else{
                dispatch(error_message(res.data.message))
            }
        })
    }
}


