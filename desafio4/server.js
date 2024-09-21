import express from 'express'

const app = express();
const port = 3000;

const array_peliculas = ['matrix','terminator'];
const array_productos = [
    {
        "id": 1,
        "nombre":"Pimpollo",
        "precio":232
    },
    {
        "id": 2,
        "nombre":"Pimpollo2",
        "precio":2322
    },
];
app.get('/', (req, res) => {
    res.send('Walter Arce')
});
app.get('/materia', (req, res) => {
    res.send('Hibridas DWN4AV')
});
app.get('/profesor',(req, res)=>{
    res.send('Camila Marcos Galbán')
});


app.use('/pelicula/:pelicula',(req,res)=>{
    const pelicula = req.params.pelicula;
    const existe = array_peliculas.includes(pelicula);
    if (existe)
    {
        res.send(`La pelicula ${pelicula} existe.`);
    }
    else
    {
        res.status(404).send(`La pelicula ${pelicula} no existe`);
    }
});

app.use('/productos',(req,res)=>{
  res.send(array_productos);
});
app.use('/productos/:id',(req,res)=>{
    const producto = res.params.id;
    
});
app.use((req,res) =>{
    res.status(404).send('Pagina no encontrada');
});
app.listen(port, () => {
    console.log('Servidor ejecutando en puerto 3000');
});