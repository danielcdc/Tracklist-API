import { Router } from 'express';
import listController from '../controllers/list.js'
import { param, body } from 'express-validator';
import { validar } from '../middlewares/validation.js'
import { token } from '../services/passport/index.js';


const router = Router();

router.post('/lists', token(), [
   body('name'== null || 'name' == ""), 
], 
validar,
listController.addNewList);
router.get('/lists', token(), validar, listController.showLists);
router.get('/lists/:id', token(),
    validar, 
    listController.showListById);
router.put('/lists/:id', token(),
    validar,
    listController.updateListById);
router.delete('/list/:id', token(),
    validar,
    listController.deleteListById);

router.post('/lists/:id_list/songs/:id_song', token(), listController.addSongToList);
router.get('/lists/:id_list/songs', token(), listController.showAllSongsFromList);
// router.get('/lists/:id_list/songs/:id_song', token(), listController.showOneSongFromList);
// router.delete('/lists/:id_list/songs/:id_song', token(), listController.deleteOneSongFromList);

export default router;