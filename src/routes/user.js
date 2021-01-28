import { Router } from express;
import { userController } from '../controllers/user'
import { param, body } from 'express-validator';

router.get('/users', userController.showUsers)
router.get('/users/:id', [param(_id).exists().withMessage('Se debe proporcionar un ID.')],
    userController.showUserById)
router.post('users', userController.createUser);
router.put('/user/:id',[param(_id).exists().withMessage('Se debe proporcionar un ID.'),
    body(nameFirst).exists(), 
    body(email).isEmail(),
    body(password).isStrongPassword({minSymbols : 0, minLength: 6}).withMessage('La contraseña no es lo suficientemente robusta.')],
    userController.updateUserById);
router.delete('/user/:id',[param(_id).exists().withMessage('Se debe proporcionar un ID.')],
    userController.deleteUserById);

const router = Router();

