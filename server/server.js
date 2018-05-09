const express = require('express');
const mongoose = require('mongoose');

// 连接mongo, 并且使用imooc集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log('数据库连接成功')
})

// 类似于mysql的表， mongo里面有文档的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require:true }
}))

/* 在文档中新增一条数据
User.create({
    user: '昭言',
    age: 18
}, function(err, doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})
*/
const app = express();

/* 删除数据
User.remove({name: '昭言'}, function(err, doc){
    console.log(doc)
})
 */

/* 更新表中的数据 
User.update({'user': '居十方'}, {'$set': {'user': '昭言'}}, function(err, doc){
    console.log(doc)
})
*/
app.get('/', (req, res) => {
    res.send('<h1>越祈说  后会有七1</h1>')
})

app.get('/data', (req, res) => {
    // 查询数据表中的数据
    User.find({user: '越祈'}, function(err, doc){
        res.json(doc)
    })
    
})

// 删除表中的数据
app.listen(7000, ()=> {
    console.log('node is listening on 7000')
})

/* 
    app.use 使用模块  
    res.send 返回文本
    re
*/