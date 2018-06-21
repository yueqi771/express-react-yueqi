import { combineReducers } from 'redux';
import userInfo from './user';
import chartUser from './chart'

const mainStore = combineReducers({
    userInfo, chartUser
})

export default mainStore