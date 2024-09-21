class LibrosController {
    async  find(req, res) {

        res.send('Lista de libros');
    }
}

export default new LibrosController();