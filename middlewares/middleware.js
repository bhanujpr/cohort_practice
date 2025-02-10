const express = require('express');
const app=express();


function userMiddleware(req,res,next){

    if(req.headers.username!='bhanu'||req.headers.password!='kyare'){
        res.status(400).json({
            "msg":"wrong credentials"
        })
    }
    else{
        next();
    }
}

function kidneyMiddleware(req,res,next){
    if(req.query.kid!=1&&req.query.kid!=2){
        res.status(400).json({
            "msg":"valid number please"
        })
    }
    else{
      next();
    }
}
app.use(userMiddleware);
app.get('/health-check',kidneyMiddleware,function(req,res){
    res.json({
        msg:'you are healthu'
    })
})
app.get('/kidney',kidneyMiddleware,function(req,res){
    res.json({
        msg:'healthy kidney'
    })
})
app.get('/heart-check',function(req,res){
    res.json({
        msg:'healthy heart'
    })
})


app.listen(3000);