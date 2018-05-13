import { error_message, register_success } from "../actions/userAction";

const initState = {
	isLogin: false,
	user: '葛清霏',
    password: '',
    message: '',
    type: 1,
}

const userInfo = (state = initState, action) => {
	switch (action.type) {
		case 'REGISTER_SUCCESS':
			return { ...state, ...action.data, isLogin: true, message: '' };
		case 'ERROR_MESSAGE':
			return { ...state, isLogin: false, message: action.message };
		default:
			return state
	}
}


export default userInfo