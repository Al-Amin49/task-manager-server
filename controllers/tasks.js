
const Task = require('../models/task')
const asyncWrapper= require('../middlewares/asyncWrapper')
const { createCustomError } = require('../errors/curstom-error')


const getALlTask=asyncWrapper(async(req, res)=>{
    const tasks=await Task.find({})
    res.status(200).json({tasks})
})
const createTask=asyncWrapper(async(req, res)=>{
    const task= await Task.create(req.body);
    res.status(201).json({task})

})
const getTask=asyncWrapper(async(req, res, next)=>{
    const {id:taskID}=req.params;
    const task= await Task.findOne({_id:taskID})
    if(!task){
        return next(createCustomError(`No task with Id ${taskID}`, 404))
    }
    console.log('test', task)
    res.status(200).json({ task });
})

const updateTask=asyncWrapper(async(req, res, next)=>{
    const {id:taskID}=req.params;
    const { title, description, dueDate, status } = req.body;

    //when status is 'Completed', completed will be true
    let completed=false;
    if(status==='Completed'){
        completed=true;
    }

    const task= await Task.findOneAndUpdate(
    { _id: taskID },
    { title, description, dueDate, status, completed },
    {
       
        new:true,
        runValidators:true
    }
    );
    if(!task){
        return next(createCustomError(`No task with Id ${taskID}`, 404))
    }
    console.log('test', task)
    res.status(200).json({ task });
})
const deleteTask=asyncWrapper(async(req, res, next)=>{
    const {id:taskID}=req.params;
    const task= await Task.findOneAndDelete({_id:taskID})
    if(!task){
        return next(createCustomError(`No task with Id ${taskID}`, 404))
    }
    res.status(200).json({ task });
})

module.exports={
    getALlTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}