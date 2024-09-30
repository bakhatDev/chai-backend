class ApiError extends Error {
    constructor (
    statusCode,
    message = "something went wrong",
    error = [],
    stact = ""
    ){
        super(statusCode),
        this.statusCode = statusCode,
        this.data = null
        this.message = message
        this.success = false
        this.error = error
        if(stact){
            this.stack = stact
        }else{
            Error.captureStackTrace(this,this.cunstrctor)
        }
    }
}

export {ApiError}