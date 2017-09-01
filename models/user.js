/**
 * Created by leo-007 on 2017/8/2.
 */
//mongoos链接 的模板
var mongoose=require('mongoose');

//创建一个UserSchema的表
var UserSchema=new mongoose.Schema({
    phoneNumber:{
        unique:true,
        type:String,
    },
    areaCode:String,
    verifyCode:String,
    accessToken:String,
    nickname:String,
    gender:String,
    breed:String,
    age:String,
    avatar:String,
    meta:{
        createAt:{
            type:Date,
            dafault:Date.now()
        },
        updateAt:{
            type:Date,
            dafault:Date.now()
        }
    }
})

// 在存储以前
UserSchema.pre('save',function (next) {
    //如果是老数据
    if(!this.isNew){
        //设置成当前时间
        this.meta.updateAt=Date.now();
    }
    next();
})
//建模型 两个在、参数（表名   ，  各个字段的约定）
module.exports=mongoose.model('User',UserSchema);