const zod = require('zod');
const express = require('express');
const { json } = require('body-parser');
const app = express();

app.use(express.json());

const schema = zod.object({
    email:zod.string().email(),
    password:zod.number().max(9)
})

app.get('/login',function(req,res){
    const response=schema.safeParse(req.body)
    res.send({response})
})

app.listen(3000);