import express from 'express';
import librosRouter from './libros.route.js';
import autoresRouter from './autores.route.js';

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router),
    router.use('/libros',librosRouter);
    router.use('/autores',autoresRouter);
}

export default routerApi