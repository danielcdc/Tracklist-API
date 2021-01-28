import { Router } from express;
import { songController } from '../controllers/song'
import router from "./list";

const router = Router();

router.post('/songs', songController.addSong);
router.get('/songs', songController.showSongs);
router.get('/songs/:id', [param(_id).exists().withMessage('Se debe proporcionar un ID.')],
    songController.showSongById);
router.put('/songs/:id', [param(_id).exists().withMessage('Se debe proporcionar un ID.'),
    body(title),
    body(artist),
    body(album),
    body(year),],
    songController.updateSong);
router.delete('/songs/:id', [param(_id).exists().withMessage('Se debe proporcionar un ID.')],
    songController.deleteSongById);


export default router;