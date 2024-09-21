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


app.get('/productos', (req, res) => {
    const { id, min, max } = req.query;

    if (id) {
        const productoId = parseInt(id, 10);
        const producto = array_productos.find(p => p.id === productoId);

        if (producto) {
            res.send(producto);
        } else {
            res.status(404).send('Producto no encontrado');
        }
    } else if (min || max) {
        const minPrecio = parseFloat(min) || 0;
        const maxPrecio = parseFloat(max) || Infinity;
        const productosFiltrados = array_productos.filter(p => p.precio >= minPrecio && p.precio <= maxPrecio);
        res.send(productosFiltrados);
    } else {
        res.send(array_productos);
    }
});
app.use((req,res) =>{
    res.status(404).send('Pagina no encontrada');
});
app.listen(port, () => {
    console.log('Servidor ejecutando en puerto 3000');
});