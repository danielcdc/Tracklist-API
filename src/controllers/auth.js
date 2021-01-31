import 'dotenv/config';
import { User, userRepository } from '../models/users';
import bcrypt from 'bcryptjs';
import { JwtService } from '../services/jwt';

const AuthController = {

    register: (req, res) => {
        let usuarioCreado = userRepository.create(
            new User(req.body.nameFirst, 
                    req.body.nameLast,
                    req.body.nameUser,
                    req.body.email, 
                    bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS))));              
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