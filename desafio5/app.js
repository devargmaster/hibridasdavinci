import express from 'express';
import routerApi from './routes/index.js';
const app = express();

app.get('/',(req,res)=>{
    res.send('API LIBROS AUTORES')
});


routerApi(app);
app.listen(3000,()=>{
    console.log('ejecutando en el puerto 3000');
});