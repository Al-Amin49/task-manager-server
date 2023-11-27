const mongoose= require('mongoose')
const connectDb=async()=>{
    try {
        const conn= await mongoose.connect(process.env.URL, {
             useNewUrlParser: true,
             useUnifiedTopology: true,
         });
 
         console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
     } catch (error) {
         console.error('Error connecting to MongoDB:', error.message)
     }
}
module.exports=connectDb;