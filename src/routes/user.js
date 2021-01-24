import express from "express";
import { Router } from express;
import { userController } from '../controllers/user'

router.get('/users', userController.showUsers)
router.get('/users/:id', userController.showUserById)
router.post('users', userController.createUser);
router.put('/user/:id', userController.updateUserById);
router.delete('/user/:id', userController.deleteUserById);

const router = Router();

