import mongoose from 'mongoose';

// Objeto esquema.
const { Schema } = moongose;

// Definición del esquema de un usuario.
const userSchema = new Schema({
    "nameFirst": {
      "type": "String"
    },
    "nameLast": {
      "type": "String"
    },
    "nameUser": {
      "type": "String"
    },
    "email": {
      "type": "String"
    },
    "password": {
      "type": "String"
    }
  });

// Objeto modelo creado a partir del esquema.
const User = moongose.model("User", userSchema);

const userRepository = {

  async findAll() {
      const result = await User.find({}).exec();
      return result;
    },

    async findById(id) {
      const result = await User.findById(id).exec();
      return result != null ? result : undefined;
    },

    async createUser(newUser) {

      const theUser = new User({
        nameFirst : newUser.nameFirst,
        nameLast : newUser.nameLast,
        nameUser : newUser.nameUser,
        email : newUser.email,
        password : newUser.password
      });
  
      const result = await theUser.save();
      return result;
    },

    updateById(id, modifiedUser) {
      const userSaved = await User.findById(id);

      if(userSaved != null ){
        return await Object.assign(userSaved, modifiedUser).save();
      } else {
        return udenfined;
      }
    },

    async delete(id) {
      await User.findbyIdAndRemove(id).exec();
    }
    
  }

  export {
    User,
    userRepository
  }


