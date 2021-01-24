import mongoose from 'mongoose'
const { Schema } = moongose;

const songSchema = new Schema({
    "title": {
      "type": "String"
    },
    "artist": {
      "type": "String"
    },
    "album": {
      "type": "String"
    },
    "year": {
      "type": "String"
    }
  });

const Song = moongose.model("Song", songSchema);