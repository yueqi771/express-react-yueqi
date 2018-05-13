const express = require('express');
const Router = express.Router();
const model = require('./model');
const User = model.getModel('user');

Router.get('/list', (req, res) => {
    User.find({}, (err, doc) => {
        return res.json(doc)
    })
})
Router.post('/register', (req, res) => {
    console.log(req.body)
    const {user, password, type} = req.body;
    User.findOne({user}, (err, doc) => {
        if(doc) {
            return res.json({ code: 0, message: '该用户已存在' })
        }

        // 创建一条数据， 存储在文档中
        User.create({user, password, type}, (err, doc) => {
            if(err){
                return res.json({code: 0, message: '服务器错误'})
            }

            return res.json({ code: 1, message: '注册成功' })
        })
    })
})
Router.get('/info', (req, res) => {
    return res.json({code: 1})
})

module.exports = Router;