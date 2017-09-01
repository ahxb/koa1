
var Koa = require('koa')
    , logger = require('koa-logger')
    , onerror = require('koa-onerror'),
    bodyParser=require('koa-bodyparser'),
    session=require('koa-session');
    // cors=require('koa-cors');
const cors = require('kcors');
var fs=require('fs');
var path=require('path');
var mongoose=require('mongoose');
var db='mongodb://localhost/leo007'

mongoose.Promise=require('bluebird');
mongoose.connect(db); //链接数据库

//链接模型
// require('./models/user')

//批量扫描定义模型的路径
var models_path=path.join(__dirname,'/models');

var walk=function (modelPath) {//  fs多个扫描
    fs
        .readdirSync(modelPath)//同步读出modePath下面的所有文件
        .forEach(function (file) {//对每个文件 进行遍历
            var filePath=path.join(modelPath,'/'+file);  //首先拿到完整路径
            var stat=fs.statSync(filePath);   //拿到状态

            if(stat.isFile()){  //如果isFile是一个文件 不是 一个文件夹
                if(/(.*)\.(js|coffee)$/.test(file)){ //正则判断 后缀 是js 或者 coffee 就加载模型文件
                    require(filePath);
                }
            }
            else if(stat.isDirectory()){ //判断是不是 一个文件夹
                walk(filePath)//如果不是 递归遍历
            }

        })
}

walk(models_path);





const app =  Koa();
// app.use(cors());



// onerror(app);
app.keys=['imooc'];
//
app.use(logger());
// //
// // app.use(session(app));
// //
app.use(bodyParser());
//


var router=require('./routes/index')();
app.use(router.routes())
    .use(router.allowedMethods())


app.listen(1234)

console.log('listening ;1234');


