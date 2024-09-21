import express from 'express';
import LibrosController from '../controllers/libros.controller.js';

const router = express.Router();

router.get('/',LibrosController.find);


export default router;