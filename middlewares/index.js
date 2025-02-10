const express = require('express');
const app=express();

app.get('/health-checkup',function(req,res){
    const username=req.headers.username;
    const pass=req.headers.password;
    const kidney=req.query.kid;

    if(username!='bhanu'||pass!='kyare'){
        res.status(400).json({
            "msg":"wrong credentials"
        })
        return
    }

    if(kidney!=1&&kidney!=2){
        res.status(400).json({
            "msg":"valid number please"
        })
        return
    }

    res.json({
        msg:"you are healthy"
    })
})
app.get('/replacement',function(req,res){
    const username=req.headers.username;
    const pass=req.headers.password;
    const kidney=req.query.kid;

    if(username!='bhanu'||pass!='kyare'){
        res.status(400).json({
            "msg":"wrong credentials"
        })
        return
    }

    if(kidney!=1&&kidney!=2){
        res.status(400).json({
            "msg":"valid number please"
        })
        return
    }

    res.json({
        msg:"your kidney replaced"
    })
})


app.listen(3000,()=>{
    console.log("app listening on 3000")
})