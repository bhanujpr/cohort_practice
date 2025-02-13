const express = require('express');
const app=express();
app.use(express.json());

app.post('/health-check',function(req,res){
    const kidneys=req.body.kidneys;
    
    const kidneyLength=kidneys.length;

    res.send('you have '+ kidneyLength + 'kidneys')
})

app.use(function(err,req,res,next){
    res.json({
        msg:"sorry something went wrong"
    })
})
app.listen(3000);