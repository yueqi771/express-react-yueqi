
const initState = {
    isLogin: true,
    name: '葛清霏',
    age: '18'
}

const userInfo = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return { ...state, isLogin: true };
        case 'LOGOUT':
            return { ...state, isLogin: false };
        default:
            return state
    }
}

export default userInfo