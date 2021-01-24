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

  const List = moongose.model("List", listSchema);