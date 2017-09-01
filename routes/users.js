var router = require('koa-router')();

var mongoose=require('mongoose');
// var User=mongoose.model("User");
router.prefix('/users');

router.get('/', function *(req,res,next) {
  console.log(1111);
  var user =new User({
      uid:1,
      username:'leo',
  })

    user.save(function (err) {
        if(err){
          res.end('err');
          return next();
        }

        User.find({},function (err,docs) {
            if(err){
              res.end('err');
              return next();
            }

            res.end(docs)
        })
    })
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});

module.exports = router;
