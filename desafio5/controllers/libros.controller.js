class LibrosController {
    async  find(req, res) {
        res.send('Lista de libros');
    }
    async findbyId(id){
        const rid = req.params.id;
        res.send(`Id ${id}`)
    }
}

export default new LibrosController();