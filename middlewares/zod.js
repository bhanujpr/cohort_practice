
const express = require('express');
const app=express();
const zod = require('zod')
app.use(express.json());

const schema = zod.array(zod.number());

app.post('/health-check',function(req,res){
    const kidneys=req.body.kidneys;
    const response=schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg:"invalid input"
        })
    }
    else{
    res.send({response})
    }
})

app.listen(3000);