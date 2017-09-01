/**
 * Created by leo-007 on 2017/8/2.
 */
var mongoose=require('mongoose');
require('../models/user');
var Book=mongoose.model('Book');


//增加
var book=new Book({
    name:'leo',
    author:"adfadf",
    publishTime:new Date()
})

book.author='diwe'


book.save(function (err) {
    console.log('save statue:',err ? 'failed':'ok');
})


