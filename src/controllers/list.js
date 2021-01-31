import listRepository from '../models/list'

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
        const listToDelete = await listRepository.findById.(req.params.id);
        if (listToDelete != undefined) {
            await listRepository.delete(req.params.id);
            res.sendStatus(204)
        } else {
            res.sendStatus(404).withMessage("Lista no encontrada.")
        }
    },

}

export default ListController;