import { userRepository } from '../models/user'

const UserController = {

    showUsers : async (req, res) => {
        let data = await userRepository.findAll();
        if (Array.isArray(data) && data.length > 0){
            res.status(200).json(data);
        } else {
            res.sendStatus(404).withMessage("Usuario no encontrado.");
        } 
    },

    showUserById : async (req, res) => {
        let user = await res.UserController.findById(req.param.id);
        if (user != undefined){
            res.status(201).json(user);
        } else {
            res.sendStatus(404).withMessage("Usuario no encontrado.");
        }
    },

    createUser : async (req, res) => {
        let newUser = await userRepository.createUser({
            nameFirst : req.body.nameFirst,
            nameLast : req.body.nameLast,
            nameUser : req.body.nameUser,
            email : req.body.email,
            password : req.body.password
        });
        res.sendStatus(201).json(newUser);
    },

    updateUserById : async (req, res) => {
        let modifiedUser = await userRepository.updateById(req.params.id, {
            nameFirst : req.body.nameFirst,
            nameLast : req.body.nameLast,
            nameUser : req.body.nameUser,
            email : req.body.email,
            password : req.body.password
        });
        if (modifiedUser == undefined)
            res.sendStatus(404).withMessage("Usuario no encontrado.");
        else
            res.status(200).json(modifiedUser);
    },

    deleteUserById : async (req, res) => {
        const userToDelete = await userRepository.findById(req.params.id);
        if(userToDelete != undefined) {
            await userRepository.delete(req.param.id);
            res.sendStatus(204);
        } else {
            res.sendStatus(404).withMessage("Usuario no encontrado.")
        }
        
    }
}

export default UserController;