const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/alumno') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Nombre del alumno: Walter Javier Arce\nComision: DWN2A'); 
    } else if (url === '/info') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        const info = {
            'Sistema Operativo': os.platform(),
            'Versión': os.release(),
            'Arquitectura': os.arch(),
            'Memoria Total': `${(os.totalmem() / (1024 * 1024 * 1024)).toFixed(2)} GB`,
            'Uptime': `${(os.uptime() / 60 / 60).toFixed(2)} horas`
        };
        res.end(JSON.stringify(info, null, 2)); 
    } else if (url === '/static') {
        const filePath = path.join(__dirname, 'index.html'); 
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error al cargar el archivo estático');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});