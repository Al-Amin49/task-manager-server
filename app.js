const express = require('express');
const app=express();
const connectDb = require('./db/connect');
const tasks= require('./routes/tasks')
const notFound= require('./middlewares/not-found');
const errorHandler=require('./middlewares/error-handler')
require('colors');
require('dotenv').config();

const port= process.env.PORT || 8000
//database config
connectDb();

//middlewares
app.use(express.json())


//routes
app.use('/api/v1/tasks', tasks)
  

app.get('/',(req, res)=>{
    res.status(200).json({message:'Hello task manager'})
})
app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log('server running on 8000')
})