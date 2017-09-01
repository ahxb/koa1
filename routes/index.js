 var Router = require('koa-router');

 // var User=require('../controllers/user')
 var featch=require('../controllers/featch')

module.exports =function () {
    var router=new Router({
        prefix:'/api'
    })
//user
//     router.get('/u/s',User.signup)
//     router.post('/u/b',User.verify)
    router.post('/fn',featch.fetch)
//app
    return router
}
