class AutoresController {
    async  find(req, res) {

        res.send('Lista de autores');
    }
}

export default new AutoresController();