import { songRepository } from '../models/song.js'

const SongController = {
    showSong: async (req, res) => {
        let data = await songRepository.findAll();
        if (Array.isArray(data) && data.length > 0){
            res.status(200).json(data);
        } else {
            res.sendStatus(404).withMessage("Canción no encontrada.");
        }
    },
    showSongById: async (req, res) => {
        let song = await res.SongController.findById(req.param.id);
        if(song != undefined){
            res.status(200).json(song);
        } else {
            res.sendStatus(404).withMessage("Canción no encontrada.");
        } 
    },
    addSong: async (req, res) => {
        let newSong = await res.SongController.create({
            title: req.body.title,
            artist: req.body.artist,
            album: req.body.album,
            year: req.body.year
        });
        res.sendStatus(201).json(newSong);
    },
    updateSongById: async (req, res) => {
        let modifiedSong = await songRepository.updateSongById(req.params.id,{ 
            title: req.body.title,
            artist: req.body.artist,
            album: req.body.album,
            year: req.body.year
        });
        if (modifiedSong == undefined) {
            res.sendStatus(404).withMessage("Canción no encontrada.");
        } else {
            res.status(200).json(modifiedSong);
        }
    },
    deleteSongById: async (req, res) => {
        const songToDelete = await songRepository.findById(req.params.id);
        if (songToDelete != undefined) {
            await songRepository.delete(req.params.id);
            res.sendStatus(204)
        } else {
            res.sendStatus(404).withMessage("Canción no encontrada.")
        }   
    }
    
}

export default SongController;