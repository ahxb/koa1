'use strict'
var mongoose=require('mongoose');
var  User=mongoose.model('User');//拿到表
var  xss=require('xss');
exports.signup=function *(next) {
    // var phoneNumber=this.request.body.phoneNumber  //拿到传过来的参数 这个是 post
    var phoneNumber=this.query.phoneNumber  //拿到传过来的参数 这个是get

    console.log(111,phoneNumber);
    //查询表里有没有数据
    var user=yield User.findOne({
        phoneNumber:phoneNumber
    }).exec()


    if(!user){
        user=new User({
            phoneNumber:xss(phoneNumber)
        })
    }

    try{
        user=yield user.save();
    }
    catch(e){
        this.body={
            success:false
        }
        return
    }

    this.body={
        success:true
    }
}

exports.verify=function *(next) {
    this.body={
        success:true
    }
}