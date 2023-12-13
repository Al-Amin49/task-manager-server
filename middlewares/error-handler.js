const { CustomAPIError } = require("../errors/curstom-error");


const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err); // Log the error
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message});
    }
    console.error(err)
    return res.status(500).json({msg: 'Something went wrong, please try again', err});
}

module.exports = errorHandlerMiddleware;