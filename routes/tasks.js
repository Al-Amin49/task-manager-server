const express= require('express');
const { createTask, getALlTask, getTask, updateTask, deleteTask } = require('../controllers/tasks');
const router=express.Router();

router.route('/').get(getALlTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports=router