import express from 'express';
import autoresController from '../controllers/autores.controller.js';

const router = express.Router();

router.get('/',autoresController.find);


export default router;