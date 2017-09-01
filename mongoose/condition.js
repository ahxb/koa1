//复杂条件 查询
var mongoose=require('mongoose');
require('../models/user');
var Book=mongoose.model('Book');



var cond={
    $or:[
        {name:'leo'},
        {name:'yanglin'},
    ]
};


Book.find(cond,function(err,docs){
    if(err){
        console.log(err);
        return
    }

    console.log('条件',cond,'结果',docs);
})