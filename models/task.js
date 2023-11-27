const mongoose=require('mongoose')

const taskSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'title is required'],
        trim:true,
        maxLength:[30, 'title can not be more than 30 characters']
    },
    description:{
        type:String,
        required:[true, 'description is required']
    },
    status:{
        type:String,
        enum:['Not Started', 'In Progress', 'Completed'],
        default:'Not Started'

    },
    dueDate:{
        type:Date,
        required:true
    }
},
{
    timestamps:true
}

)
module.exports = mongoose.model('Task', taskSchema);