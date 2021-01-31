import { Router } from express;
import { songController } from '../controllers/song'
import { param, body } from 'express-validator';
import router from "./list";
import { validar } from '../middlewares/validation'
import { token } from '../services/passport';


const router = Router();

router.post('/songs', token(), songController.addSong);
router.get('/songs', token(), songController.showSongs);
router.get('/songs/:id', token(), [param(_id).exists().withMessage('Se debe proporcionar un ID.')], 
    validar,
    songController.showSongById);
router.put('/songs/:id', token(), [param(_id).exists().withMessage('Se debe proporcionar un ID.'),
    ], 
    validar,
    songController.updateSong);
router.delete('/songs/:id', token(), [param(_id).exists().withMessage('Se debe proporcionar un ID.')], 
    validar,
    songController.deleteSongById);


export default router;