const express = require('express');
const connectDb = require('./db/connect');
require('colors');
require('dotenv').config();

//database config
connectDb();
const app=express();

app.use(express.json())
app.get('/',(req, res)=>{
    res.status(200).json({message:'Hello task manager'})
})

app.listen(process.env.PORT, ()=>{
    console.log('server running on 8000')
})