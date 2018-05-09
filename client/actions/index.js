import axios from 'axios'

export const login = (userInfo) => {type: 'LOGIN', userInfo};
export const logout = (userInfo) => {type: 'LOGOUT', userInfo};

// 获取异步数据
export const getUser = () =>　{
    return dispatch => {
        axios.get('/api/data')
        .then((data) => {
            if(data.status == 200){
                dispatch(login(data.data[0]))
            }
        })
    }
}