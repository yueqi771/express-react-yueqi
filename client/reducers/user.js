import { error_message, register_success, login_success, updated_user } from "../actions/userAction";
import { getRedirectPath } from '../utils/redirect'

const initState = {
	isLogin: false,
	user: '',
    message: '',
    type: 1,
    redirectTo: ''
}

const userInfo = (state = initState, action) => {
	switch (action.type) {
        case 'UPDATE_USER': 
            return { ...state, ...action.data, isLogin: true, message: '保存成功', redirectTo: getRedirectPath(action.data) }
		case 'REGISTER_SUCCESS':
            return { ...state, ...action.data, isLogin: true, message: '注册成功', redirectTo: getRedirectPath(action.data) };
        case 'LOGIN_SUCCESS':
			return { ...state, ...action.data, isLogin: true, message: '注册成功', redirectTo: getRedirectPath(action.data) };
		case 'ERROR_MESSAGE':
            return { ...state, isLogin: false, message: action.message };
        
        case 'LOGOUT':
            return { ...initState, redirectTo: '/login' }
		default:
			return state
	}
}


export default userInfo