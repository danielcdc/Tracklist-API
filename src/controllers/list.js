import {listRepository} from '../models/list.js'
import {songRepository} from '../models/song.js'

const ListController = {
    showLists: async (req, res) => {
        let data = await listRepository.findAll();
        if (Array.isArray(data) && data.length > 0){
            res.status(200).json(data);
        } else {
            res.sendStatus(404).withMessage("Lista no encontrada.");
        }
    },
    showListById: async (req, res) => {
        let list = await res.ListController.findById(req.param.id);
        if(list != undefined){
            res.status(200).json(list);
        } else {
            res.sendStatus(404).withMessage("Lista no encontrada.");
        }
    },
    addNewList: async (req, res) => {
        let newList = await res.ListController.create({
            name: req.body.name,
            type: req.body.type,
            user_id: req.body.user_id,
            songs: req.body.songs
        });
        res.sendStatus(201).json(newList);
    },
    updateListById: async (req, res) => {
        let modifiedList = await listRepository.updateListById(req.params.id,{ 
                name: req.body.name,
                type: req.body.type,
                user_id: req.body.user_id,
                songs: req.body.songs
            });
        if (modifiedList == undefined) {
            res.sendStatus(404).withMessage("Lista no encontrada.");
        } else {
            res.status(200).json(modifiedList);
        }
    },
    deleteListById: async (req, res) => {
        const listToDelete = await listRepository.findById(req.params.id);
        if (listToDelete != undefined) {
            await listRepository.delete(req.params.id);
            res.sendStatus(204)
        } else {
            res.sendStatus(404).withMessage("Lista no encontrada.")
        }
    },

    addSongToList: async (req, res) => {
        let theSong = await songRepository.findById(req.params.id_song);
        if(theSong != undefined) {
            let theList = await listRepository.findById(req.params.id_list);
            if(theList != undefined) {
                theList.songs.push(theSong._id)
                await theList.save();
                res.sendStatus(202);
            } else {
                res.status(400).json({
                    mensaje: `La lista con ID: ${req.param.id_list} no está registrada en la base de datos.`
                })
            }
        } else {
            res.status(400).json({
                mensaje: `La canción con ID: ${req.param.id_song} no está registrada en la base de datos.`
            });
        }
    },
    showAllSongsFromList: async (req, res) => {
        // Encontrar la lista 
        let theList = await listRepository.findById(req.params.id_list).exec();
        if(theList != undefined){
            res.status(200).json(theList.songs)
        } else {
            res.sendStatus(404);
        }
    }


}

export default ListController;