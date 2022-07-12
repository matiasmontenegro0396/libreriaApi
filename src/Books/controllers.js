const { Response } = require("../Responses/response");
const createError = require("http-errors");
const debug = require("debug")("app:module-Books-Controller");
const {LibrosServices} = require('./services')

const checkIdLength = (id) => {return id.length === 24}
const checkBookCorrect = (book) => {!book === null}


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
    
    if(checkIdLength(id)){
      const libro = await LibrosServices.getOne(id);
      console.log(checkBookCorrect(libro));
      if(checkBookCorrect(libro) === undefined){

        Response.success(res, 200, { msg: "Libro encontrado" }, libro);
      }
      else{
        res.status(404).json({msg: "Libro no existe. Checkea el id"})
      }
    }
    else{
      res.status(400).json({msg: "El id no es correcto. Deberia tener 24 caracteres"})
    }
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

const updateBook = async (req,res) => {
  try {
    const libroUpdated = await LibrosServices.update(req);
    Response.success(res, 200, { msg: "Libro actualizado" }, libroUpdated);
  } catch (error) {
    debug(error);
    Response.error(res, error);
  }
}

module.exports.BookController = { getAllBooks, addBook, getBook, updateBook };
