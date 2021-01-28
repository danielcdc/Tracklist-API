import { Router } from express;
import { listController } from '../controllers/list'

const router = Router();

router.post('/lists', listController.addNewList);
router.get('/lists', listController.showList);
router.get('/lists/:id', listController.showListById);
router.put('/lists/:id', listController.updateListById);
router.delete('/list/:id', listController.deleteListById);

router.post('/lists/:id1/songs/:id2', listController.addSongToList);
router.get('/lists/:id1/songs', listController.showAllSongsFromList);
router.get('/lists/:id1/songs/:id2', listController.showOneSongFromList);
router.delete('/lists/:id1/songs/:id2', listController.deleteOneSongFromList);

export default router;