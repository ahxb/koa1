exports.fetch=function *(req,res,next) {
    // var phoneNumber=this.request.body.phoneNumber  //拿到传过来的参数 这个是 post
    var phoneNumber=this.query.phoneNumber  //拿到传过来的参数 这个是get

    console.log(33,this.query);
    console.log(44,res);
    //查询表里有没有数据


    this.body={
        success:'200',
        data:{
            num:'122'
        }
    }
}
