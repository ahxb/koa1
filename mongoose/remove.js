/**
 * Created by leo-007 on 2017/8/2.
 */
var mongoose=require('mongoose');
require('../models/user');
var Book=mongoose.model('Book');

//返回的是单个 对象
Book.findOne({name:'leo'},function (err,doc) {
    if(err){
        console.log('err',err);
        return;
    }


    //删除

    if(doc){
        doc.remove();
    }

    console.log('ok',doc);
})