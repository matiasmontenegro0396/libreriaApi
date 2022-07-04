const createError = require("http-errors");

const success = (res, status = 200, msg = "Ok", body = {}) => {
  res.status(status).json({ msg, body });
};

const error = (res, error = null) => {
    // si hay error agarro el status code y el mensaje
    const { statusCode, msg } = error
        ? error
        : new createError.InternalServerError();

    res.status(statusCode).json({msg})    
};


module.exports.Response = {success, error}