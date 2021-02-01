import mongoose from 'mongoose';
import 'dotenv/config.js';
import bcrypt from 'bcryptjs';


// Objeto esquema.
const { Schema } = mongoose;

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
const User = mongoose.model("User", userSchema);

const userRepository = {

  async findAll() {
      const result = await User.find({}).exec();
      return result;
    },

    async findById(id) {
      const result = await User.findById(id).exec();
      return result != null ? result : undefined;
    },

    async findByUsername(username){
      const result = await User.find({'nameUser':username});
      return result != null ? result : undefined;
    },

    async createUser(newUser) {

      const theUser = new User({
        nameFirst : newUser.nameFirst,
        nameLast : newUser.nameLast,
        nameUser : newUser.nameUser,
        email : newUser.email,
        password : bcrypt.hashSync(newUser.password, parseInt(process.env.BCRYPT_ROUNDS))
      });
  
      const result = await theUser.save();
      return result;
    },

    async updateById(id, modifiedUser) {
      const userSaved = await User.findById(id).exec();

      if(userSaved != null ){
        return await Object.assign(userSaved, modifiedUser).save();
      } else {
        return udenfined;
      }
    },

    async delete(id) {
      await User.findbyIdAndRemove(id).exec();
    },

    toDto(){
      return {
        nameFirst: this.nameFirst, 
        nameLast: this.nameLast,
        nameUser: this.nameUser,
        email: this.email
      }
    }

  }

  export {
    User,
    userRepository
  }


