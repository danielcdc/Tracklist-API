import { Router } from 'express';
import userController from '../controllers/user.js'
import { param, body } from 'express-validator';
import { validar } from '../middlewares/validation.js'
import { token } from '../services/passport/index.js';

const router = Router();

router.get('/users', token(), userController.showUsers)
router.get('/users/:id', token(),
    validar,
    userController.showUserById)
router.put('/user/:id', token(), 
    [body(nameFirst).exists(), 
    body(email).isEmail(),
    body(password).isStrongPassword({minSymbols : 0, minLength: 6}).withMessage('La contraseña no es lo suficientemente robusta.')],
    validar,
    userController.updateUserById);
router.delete('/user/:id', token(), [param(_id).exists().withMessage('Se debe proporcionar un ID.')],
    validar,
    userController.deleteUserById);

export default router;
