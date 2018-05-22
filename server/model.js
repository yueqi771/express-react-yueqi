const mongoose = require('mongoose');

// 连接mongo, 并且使用imooc集合
const DB_URL = 'mongodb://127.0.0.1:27017/yueqi-chat';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log('数据库连接成功')
})

const models = {
    user: {
        'user': { type: String, require: true },
        'password': { type: String, require: true },
        'type': { type: String, require: true } ,
        'avatar': {  },
        'age': { type: String },
        'desc': { type: String },
        'title': { type: String },
        'company': { type: String },
        'money': { type: String },
    },

    chat: {

    }
}

// 类似于mysql的表， mongo里面有文档的概念
for(let model in models){
    mongoose.model(model, new mongoose.Schema(models[model]))
}

module.exports = {
    getModel: (name) => {
        return mongoose.model(name)
    }
}


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