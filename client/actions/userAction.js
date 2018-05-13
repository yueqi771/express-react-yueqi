import axios from 'axios';
import qs from 'qs';

export const register_success = (userInfo) => { return { type: 'REGISTER_SUCCESS', data: userInfo }};
export const error_message = (msg) => { return { type: 'ERROR_MESSAGE', message: msg } };
export const login = (userInfo) => { type: 'LOGIN', userInfo };
export const logout = (userInfo) => { type: 'LOGOUT', userInfo };
// 更新用户信息
export const userData = (data) => { return { type: 'UPDATE_USER', data: data } }

// 注册
export const register = ({user, password, repassword}) => {
    if(user == '' || password == ''){
        return error_message('请输入用户名或密码')
    }
    if(password !== repassword){
        return error_message('请输入相同的密码')
    }

    return dispatch => {
        axios.post('/api/user/register', qs.stringify({
            user, password
        })).then((res) => {
            if(res.data.code === 0){
                dispatch(register_success(user, password))
            }else{
                dispatch(error_message(res.data.message))
            }
        })
    }
}

// 获取异步数据
export const getUser = () => 　{
	return (dispatch) => {
		// axios.get('/api/data')
		// 	.then((data) => {
		// 		if (data.status == 200) {
		// 			dispatch(userData(data.data[0]))
		// 		}
		// 	})
	}
}

