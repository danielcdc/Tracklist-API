import mongoose from 'mongoose';

// Objeto esquema.
const { Schema } = moongose;

// Definición del esquema de un usuario.
const userSchema = new Schema({
    "first_name": {
      "type": "String"
    },
    "last_name": {
      "type": "String"
    },
    "user_name": {
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

