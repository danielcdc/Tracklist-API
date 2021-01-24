import express from "express";
import { Router } from express;
import { songController } from '../controllers/song'
import router from "./list";

const router = Router();

router.post('/songs', songController.addSong);
router.get('/songs', songController.showSongs);
router.get('/songs/:id', songController.showSongById);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.deleteSongById);


export default router;