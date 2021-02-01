import { Router } from 'express';
import songController from '../controllers/song.js'
import { param, body } from 'express-validator';
import router from "./list.js";
import { validar } from '../middlewares/validation.js'
import { token } from '../services/passport/index.js';

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

// const router = Router();

export default router;