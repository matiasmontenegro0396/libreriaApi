const { Response } = require("../Responses/response");
const createError = require("http-errors");
const debug = require("debug")("app:module-Books-Controller");
const {LibrosServices} = require('./services')

const getAllBooks = async (req, res) => {
  try {
    
    const result = await LibrosServices.getAll();
    Response.success(res, 200, { msg: "Todos los libros"}, result );
  } catch (error) {
    debug(error);
    Response.error(res, error);
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await LibrosServices.getOne(id);
    Response.success(res, 200, { msg: "Libro encontrado" }, libro);
  } catch (error) {
    debug(error);
    Response.error(res, error);
  }
};

const addBook = async (req, res) => {

  try {
    if (!req.body) {
      Response.error(res, createError.BadRequest);
    }

    const result = await LibrosServices.create(req)
    Response.success(res, 200, (msg = "Libro Agregado"), { result });
  } catch (error) {
    debug(error);
    Response.error(res, error);
  }
};

module.exports.BookController = { getAllBooks, addBook, getBook };
