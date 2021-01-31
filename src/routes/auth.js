import { Router } from 'express';
import { body } from 'express-validator';
import { AuthController } from '../controllers/auth';
import { validar } from '../middlewares/validacion';
import { password } from '../services/passport';


const router = Router();

router.post('/register', [
    body('nameUser')
        .isLength({min: 4})
        .withMessage('La longitud mínima del nombre de usuario son 4 caracteres'),
    body('password').isStrongPassword({minSymbols : 0, minLength: 6}).withMessage('La contraseña debe tener como mínimoo 6 caracteres'),
    body('email')
        .isEmail()
        .withMessage('El campo email debe ser un email válido')
],
validar, 
AuthController.register);


router.post('/login',
    password(),
    AuthController.login
    );


export default router;