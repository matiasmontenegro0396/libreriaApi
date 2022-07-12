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

module.exports.LibrosServices = {getAll, getOne, create, update}