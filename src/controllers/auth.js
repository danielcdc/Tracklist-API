import 'dotenv/config.js';
import { User, userRepository } from '../models/user.js';
import bcrypt from 'bcryptjs';
import { JwtService } from '../services/jwt/index.js';

const AuthController = {

    register: async (req, res) => {
        let usuarioCreado = await userRepository.createUser(
            new User({nameFirst : req.body.nameFirst, 
                    nameLast: req.body.nameLast,
                    nameUser: req.body.nameUser,
                    email: req.body.email, 
                    password: bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS))}));              
        res.status(201).json({
            nameFirst : usuarioCreado.nameFirst,
            nameLast: usuarioCreado.nameLast,
            nameUser: usuarioCreado.nameUser,
            email: usuarioCreado.email
        });
    },
    login: (req, res) => {
        const token = JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        });
    }
}

export {
    AuthController
}