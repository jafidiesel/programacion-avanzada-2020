class ErrorHandler extends Error{
    constructor(statusCode, message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

const handleError = (err, res) => {
    const { statusCode, message} = err;
    console.log("err", err.statusCode, err);
    
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
}

module.exports = {
    ErrorHandler,
    handleError
}