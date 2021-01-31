import { Router } from express;
import { songController } from '../controllers/song'
import router from "./list";
import { validar } from '../middlewares/validation'

const router = Router();

router.post('/songs', songController.addSong);
router.get('/songs', songController.showSongs);
router.get('/songs/:id', [param(_id).exists().withMessage('Se debe proporcionar un ID.')], 
    validar,
    songController.showSongById);
router.put('/songs/:id', [param(_id).exists().withMessage('Se debe proporcionar un ID.'),
    ], 
    validar,
    songController.updateSong);
router.delete('/songs/:id', [param(_id).exists().withMessage('Se debe proporcionar un ID.')], 
    validar,
    songController.deleteSongById);


export default router;