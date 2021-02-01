import { Router } from 'express';
import songController from '../controllers/song.js'
import { param, body } from 'express-validator';
import router from "./list.js";
import { validar } from '../middlewares/validation.js'
import { token } from '../services/passport/index.js';

router.post('/songs', token(), songController.addSong);
router.get('/songs', token(), songController.showSong);
router.get('/songs/:id', token(), 
    validar,
    songController.showSongById);
router.put('/songs/:id', token(),  
    validar,
    songController.updateSongById);
router.delete('/songs/:id', token(),  
    validar,
    songController.deleteSongById);

// const router = Router();

export default router;