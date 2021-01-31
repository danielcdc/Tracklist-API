import { Router } from express;
import { userController } from '../controllers/user'
import { param, body } from 'express-validator';
import { validar } from '../middlewares/validation'
import { token } from '../services/passport';

router.get('/users', token(), userController.showUsers)
router.get('/users/:id', token(),[param(_id).exists().withMessage('Se debe proporcionar un ID.')],
    validar,
    userController.showUserById)
router.put('/user/:id', token(), [param(_id).exists().withMessage('Se debe proporcionar un ID.'),
    body(nameFirst).exists(), 
    body(email).isEmail(),
    body(password).isStrongPassword({minSymbols : 0, minLength: 6}).withMessage('La contraseña no es lo suficientemente robusta.')],
    validar,
    userController.updateUserById);
router.delete('/user/:id', token(), [param(_id).exists().withMessage('Se debe proporcionar un ID.')],
    validar,
    userController.deleteUserById);

const router = Router();

