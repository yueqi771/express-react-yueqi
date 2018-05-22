const express = require('express');
const utility = require('utility');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

const _filter = {'password': 0, '__v': 0}

Router.get('/list', (req, res) => {
    User.find({}, (err, doc) => {
        return res.json(doc)
    })
})

/*
*  func: 注册
*  @params: user，password, type
*  author: wangdongxu
*/
Router.post('/register', (req, res) => {
    const {user, password, type} = req.body;
    User.findOne({user}, (err, doc) => {
        if(doc) {
            return res.json({ code: 0, message: '该用户已存在' })
        }
        
        // 获取到生成的用户信息 存储在文档中
        const newUser = new User({user, type, password: md5Pwd(password)}) 

        newUser.save((err, doc) => {
            if(err) {
                return res.json({ code: 0, message: '系统繁忙，请稍候再试' });
            }
            const { user, type, _id } = doc;

            // 保存cookie到本地
            res.cookie('userId', _id);

            return res.json({ 
                code: 1, 
                data: {user, type, _id},
                message: '注册成功' 
            })
            
        })
        
    })
})

// 登录功能
Router.post('/login', (req, res) => {
    const { user, password } = req.body;
    User.findOne({user, password: md5Pwd(password)}, _filter, (err, doc) => {
        if(!doc) {
            return res.json({code: 0, message: '用户名或密码错误'})
        }

        // 保存cookie到本地
        res.cookie('userId', doc._id)
        return res.json({code: 1, data: doc})
    })
})

/*
*  func: 获取用户信息
*  @params: user，password, type
*  author: wangdongxu
*/
Router.get('/info', (req, res) => {
    const {userId} = req.cookies;
    if(!userId){
        // 用户未登录， 重新登录
        return res.json({code: 0})
    }

    User.findOne({_id: userId}, _filter, (err, doc) => {
        if(err) {
            return res.json({ code: 0, message: '系统繁忙，请稍后再试' })
        }
        if(doc) {
            return res.json({ code: 1, data: doc })
        }
    })
})

/*
*  func: 完善用户信息
*  @params: user，password, type
*  author: wangdongxu
*/
Router.post('/saveInfo', (req, res) => {
    const userId = req.cookies.userId;
    if(!userId) {
        return json.dumps({ code: 0, message: '服务器繁忙，保存失败' })
    }

    const body = req.body;

    User.findByIdAndUpdate(userId, body, (err, doc) => {
        console.log(err)
        if(err) {
            return res.json({ code: 0, message: '系统繁忙，请稍后再试' })
        }
        const data = Object.assign({}, {
            user: doc.user,
            type: doc.type
        }, body)

        return res.json({ code: 1, data })
    })
})


function md5Pwd(password){
    const salt = 'yueqi_is_three_44564@sdf#$%#$%@#$~';
    return utility.md5(utility.md5(password + salt))
}
 
module.exports = Router;