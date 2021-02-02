import { Router } from 'express';
import { body } from 'express-validator';
import { AuthController } from '../controllers/auth.js';
import { validar } from '../middlewares/validation.js';
import { password } from '../services/passport/index.js';


const router = Router();

router.post('/register', [
    body('nameUser')
        .isLength({min: 5})
        .withMessage('La longitud mínima del nombre de usuario son 4 caracteres'),
    body('password').isLength({minLength: 6}).withMessage('La contraseña debe tener como mínimoo 6 caracteres'),
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