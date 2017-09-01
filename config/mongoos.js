//主体结构

var config=require('./config');



module.exports=function () {
    var db=mongoose.connect(config.mongodb);

    require('../models/user.server.model');
    return db;
}