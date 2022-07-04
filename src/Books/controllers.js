const { Database } = require("../Database/index");
const { Response } = require("../Responses/response");
const createError = require("http-errors");
const debug = require("debug")("app:module-Books-Controller");

const getAllBooks = async (req,res) => {
    try {
        const result = await Database()
        console.log(result);
        // Response.success(res, 200, {msg:"Todos los libros", body: result})
    } catch (error) {
        debug(error)
        Response.error(res,error)
    }
}


const addBook = async (req, res) => {
  const { body } = req;

  try {
    if (!body) {
      Response.error(res, createError.BadRequest);
    }

    const result = await Database();
    console.log(result);
  } catch (error) {
    debug(error);
    Response.error(res, error);
  }
};

module.exports.BookController = { getAllBooks, addBook };
