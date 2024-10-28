import express from 'express';
import mongoose from 'mongoose';
import Usuario from './models/Usuario.js';

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/desafio7')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

    app.post('/crear', async (req, res) => {
        const usuarios = [
            {
                nombre: 'Juan',
                apellido: 'Perez',
                edad: 30,
                email: 'water@ssd.com',
                direccion: {
                    calle: 'Calle Falsa 123',
                    ciudad: 'Springfield',
                    codigo_postal: '12345'
                }
            },
            {
                nombre: 'Homero',
                apellido: 'Simpson',
                edad: 40,
                email: 'oeoe@sss.com',
                direccion: {
                    calle: 'Avenida Siempreviva 742',
                    ciudad: 'Springfield',
                    codigo_postal: '54321'
                }
            },
            {
                nombre: 'Marge',
                apellido: 'Simpson',
                edad: 38,
                email: 'walter@gmail.com',  
                direccion: {
                    calle: 'Avenida Siempreviva 742',
                    ciudad: 'Springfield',
                    codigo_postal: '54321'
                }
            },
            {
                nombre: 'Bart',
                apellido: 'Simpson',
                edad: 38,
                email: 'walter@gmail.com',  
                direccion: {
                    calle: 'Avenida Siempreviva 742',
                    ciudad: 'Springfield',
                    codigo_postal: '54321'
                }
            },
            {
                nombre: 'Lisa',
                apellido: 'Simpson',
                edad: 38,
                email: 'walter@gmail.com',  
                direccion: {
                    calle: 'Avenida Siempreviva 742',
                    ciudad: 'Springfield',
                    codigo_postal: '54321'
                }
            },
            {
                nombre: 'Maggi',
                apellido: 'Simpson',
                edad: 38,
                email: 'walter@gmail.com',  
                direccion: {
                    calle: 'Avenida Siempreviva 742',
                    ciudad: 'Springfield',
                    codigo_postal: '54321'
                }
            },
            {
                nombre: 'Apu',
                apellido: 'Nahasapeemapetilon',
                edad: 38,
                email: 'walter@gmail.com',  
                direccion: {
                    calle: 'Avenida Siempreviva 742',
                    ciudad: 'Springfield',
                    codigo_postal: '54321'
                }
            },
            {
                nombre: 'Barney',
                apellido: 'Gumble',
                edad: 38,
                email: 'barney@gmail.com',
                direccion: {
                    calle: 'Calle Falsa 123',
                    ciudad: 'Springfield',
                    codigo_postal: '12345'
                }
            },
            {
                nombre: 'Ned',
                apellido: 'Flanders',
                edad: 38,
                email: 'ned@gmail.com',
                direccion: {
                    calle: 'Calle Falsa 123',
                    ciudad: 'Springfield',
                    codigo_postal: '12345'
                }
            },
            {
                nombre: 'Montgomery',
                apellido: 'Burns',
                edad: 38,
                email: 'burns@gmail.com',
                direccion: {
                    calle: 'Calle Falsa 123',
                    ciudad: 'Springfield',
                    codigo_postal: '12345'
                }
            }
        ];
        try {
            const usuario = await Usuario.create(usuarios);
            res.json(usuario);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
app.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
 });
 app.get('/usuarios/:id', async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
 });
 app.put('/usuarios/:id', async (req, res) => {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
       req.params.id, 
       req.body, 
       { new: true }
    );
    res.json(usuarioActualizado);
 });
 app.delete('/usuarios/:id', async (req, res) => {
    await Usuario.findByIdAndDelete(req.params.id);
    res.send('Usuario eliminado');
 });
 
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutando en el puerto ${PORT}`);
});