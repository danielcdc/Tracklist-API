import { Router } from express;
import { listController } from '../controllers/list'
import { param, body } from 'express-validator';
import { validar } from '../middlewares/validation'
import { token } from '../services/passport';


const router = Router();

router.post('/lists', token(), [
   body('name'== null || 'name' == "")
   .withMessage("El nombre de la lista no debe ser nulo o vacío."), 
], 
validar,
listController.addNewList);
router.get('/lists', listController.showList);
router.get('/lists/:id', token(), [param(_id).exists().withMessage('Se debe proporcionar un ID.')],
    validar, 
    listController.showListById);
router.put('/lists/:id', token(), [param(_id).exists().withMessage('Se debe proporcionar un ID.')],
    validar,
    listController.updateListById);
router.delete('/list/:id', token(),[param(_id).exists().withMessage('Se debe proporcionar un ID.')],
    validar,
    listController.deleteListById);

router.post('/lists/:id1/songs/:id2', listController.addSongToList);
router.get('/lists/:id1/songs', listController.showAllSongsFromList);
router.get('/lists/:id1/songs/:id2', listController.showOneSongFromList);
router.delete('/lists/:id1/songs/:id2', listController.deleteOneSongFromList);

export default router;