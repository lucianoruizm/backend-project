const express = require('express');
const { booksList, addBook, updateBook, deleteBook } = require('../controllers/controllerBook');
const router = express.Router();

router.get('/list', booksList); //Read
router.post('/add', addBook); //Create
router.put('/edit/:id', updateBook); //Update
router.delete('/delete/:id', deleteBook); //Delete

module.exports = router;