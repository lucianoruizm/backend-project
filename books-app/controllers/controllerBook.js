const { clear } = require('console');
const fs = require('fs')

const booksList = async (req, res) => {
    try{
        const data = await fs.promises.readFile('./db/book.json', 'utf-8');
        let booksDataJson = JSON.parse(data);
        res.status(200).json({booksDataJson});
    } catch{
        res.status(400).send('No se encuentran los libros');
    }
}

const addBook = async (req, res) => {
    try{
        const data = await fs.promises.readFile('./db/book.json', 'utf-8');
        let booksDataJson = JSON.parse(data);

        let book = {
            id: booksDataJson.length + 1,
            title: req.body.title,
            author: req.body.author,
            url: req.body.url,
            description: req.body.description
        }
        booksDataJson.push({book: book});
        let booksJson = JSON.stringify(booksDataJson, null, 2);

        await fs.promises.writeFile(`./db/book.json`, booksJson);
        res.status(200).send("Libro agregado");
    } catch (error) {
        res.status(400).send("No se pudo agregar el libro")
    }
}

const updateBook = async (req, res) => {
    try {
        const data = await fs.promises.readFile('./db/book.json', 'utf-8');
        let booksDataJson = JSON.parse(data);
        const id = req.params.id;
        const position = id - 1;

        const updatedBook = {
            id: id,
            title: req.body.title,
            author: req.body.author,
            ulr: req.body.url,
            description: req.body.description
        }
        booksDataJson[position] = {book: updatedBook};
        let booksJson = JSON.stringify(booksDataJson, null, 2);

        await fs.promises.writeFile(`./db/book.json`, booksJson);
        res.status(200).send("Libro actualizado");
    } catch (error) {
        res.status(400).send("No se pudo actualizar el libro")
    }
}

const deleteBook = async (req, res) => {
    try {
        const data = await fs.promises.readFile('./db/book.json', 'utf-8');
        let booksDataJson = JSON.parse(data);

        await fs.promises.unlink('./db/book.json');

        let clearBook = booksDataJson.filter((book) => book.book.id != req.params.id);
        let booksJson = JSON.stringify(clearBook, null, 2);

        await fs.promises.writeFile(`./db/book.json`, booksJson);
        res.status(200).send("Libro eliminado");
    } catch {
        res.status(400).send("No se pudo eliminar el libro");
    }
}


module.exports = {booksList, addBook, updateBook, deleteBook}