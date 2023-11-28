
const asyncWrapper=(fn)=>{
    return async(req, res, next)=>{
        try{
            await fn(req, res)
        }
        catch(error){
            console.error('Error in async route handler:', error);
            next(error)
        }
    }

}
module.exports=asyncWrapper;