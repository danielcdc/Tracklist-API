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

const songRepository = {

  async findAll() {
    const result = await Song.find({}).exec();
    return result;
  },

  async findById(id) {
    const result = await Song.findById(id).exec();
    return result != null ? result : undefined;
  },

  async createSong(newSong) {
    const theSong = {
      type : newSong.type,
      artist : newSong.artist,
      album : newSong.album,
      year : newSong.year
    }
    const result = await Song.save(theSong);
    return result;
  },

  update(id, modifiedSong) {
    const songSaved = await Song.findById(id);

    if(songSaved != null) {
      return await Object.assign(songSaved, modifiedSong);
    } else {
      return undefined;
    }
  },

  async delete(id) {
    await this.findByIdAndDelete(id).exec();
  }
}

export {
  Song,
  songRepository
}