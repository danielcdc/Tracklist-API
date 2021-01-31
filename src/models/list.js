import mongoose from 'mongoose'
const { Schema } = moongose;

const listSchema = new Schema({
    "name": {
      "type": "String"
    },
    "description": {
      "type": "String"
    },
    "user_id": {
      "type": "String"
    },
    "songs": {
      "type": [
        "Mixed"
      ]
    }
  })

  const listRepository = {

    async create(newList) {
      const theList = new List({
        name: newList.name,
        type: newList.type,
        user_id: newList.user_id,
        songs: newList.songs
      });

      const result = await theList.save();
      return result;
    },

    async findAll() {
      const result = await List.findAll({}).exec();
      return result;
    },

    async findById(id) {
      const result = await List.findById(id).exec();
      return result != null ? result : undefined;
    },

    async updateById(id, modifiedList) {
      const listSaved = await List.findById(id);
      if(listSaved != null) {
        return await Object.assign(listSaved, modifiedList).save();
      } else {
        return undefined;
      }
    },

    async deleteById(id){
      await List.findByAndRemove(id).exec();
    }

   
  }

  const List = moongose.model("List", listSchema);

  export {
    List,
    listRepository
  }