/**
 * Created by leo-007 on 2017/8/2.
 */
/**
 * Created by leo-007 on 2017/8/2.
 */
var mongoose=require('mongoose');
require('../models/user');
var Book=mongoose.model('Book');

//查询的是返回的数组里包含多个 对象
Book.find({},function (err,docs) {
    if(err){
        console.log(err);
        return;
    }

    console.log('ok',docs);
})