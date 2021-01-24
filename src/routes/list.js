import { Router } from express;
import { listController } from '../controllers/list'

const router = Router();

router.post('/lists', listController.addNewList);
router.get('/lists', listController.showList);
router.get('/lists/:id', listController.showListById);
router.put('/lists/:id', listController.updateListById);
router.delete('/list/:id', listController.deleteListById);

export default router;