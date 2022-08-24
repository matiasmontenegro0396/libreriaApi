const { ObjectId } = require("mongodb");
const { Database } = require("../Database/index");

const getAll = async () => {
  const db = await Database();
  return await db.find({}).toArray();
};

const getOne = async (id) => {
  const db = await Database();

  return await db.findOne(ObjectId(id));
};

const findSome = async(searchQuery) => {
  const db = await Database();


  let result = await db.aggregate([
    {$search: {
      index: 'default',
      text: {
        query: searchQuery,
        path: {
          wildcard: '*'
        }
      }
    }}
  ]).toArray()

  return result
  
}

const create = async (data) => {
    const db = await Database();
    const libro = data.body;

    return await db.insertOne(libro)

}

const update = async (data) => {
    const {params : { id }, body} = data
    const db = await Database();
    const libro = await getOne(id)
    
    return await db.updateOne(libro, {$set: body})
}

// Esto crea un index para poder buscar mediante texto
const createTextIndex = async () => {
  const db = await Database();
  
  
  const result = await db.createIndex({ "nombre": "text", "descripcion": "text", "autor": "text"});

  console.log(result);
} 


module.exports.LibrosServices = {getAll, getOne, findSome, create, update}