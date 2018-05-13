const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./user')

const app = express();
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/user', userRouter);


app.get('/data', (req, res) => {
    // 查询数据表中的数据
    User.find({user: '越祈'}, function(err, doc){
        res.json(doc)
    })
})

app.listen(7000, ()=> {
    console.log('node is listening on 7000')
})

/* 
    app.use 使用模块  
    res.send 返回文本
    re
*/
