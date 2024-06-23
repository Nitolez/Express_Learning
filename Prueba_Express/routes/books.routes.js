const router = require('express').Router();
const booksController = require('../controllers/books.controller');
const checkApiKey = require('../middlewares/auth_api_key'); 
const {
  booksDataValidateChainMethod
} = require("..books.validation");


//Cada vez que alguien invoque post, put o delete invoca esto que te verifica la api key

// CRUD --> CREATE, READ, UPDATE, DELETE

// Params:
// http://localhost:3000/api/books/quijote
// http://localhost:3000/api/books/
// http://localhost:3000/api/books/celestina

router.get("/:title?", booksController.getBook);

/*
{
  "title": "Don Quijote de la Mancha",
  "author":"Miguel de Cervantes",
  "pages": 2000,
  "year":1550,
  "description": "en un lugar de la mancha..."
}
*/
// POST http://localhost:3000/api/books
// POST http://localhost:3000/api/books/API_KEY=123abc

router.post("/", checkApiKey, booksDataValidateChainMethod, booksController.createBook);

// PUT http://localhost:3000/api/books
// PUT http://localhost:3000/api/books/API_KEY=123abc

router.put("/", checkApiKey,  booksController.editBook);

// DELETE http://localhost:3000/api/books/quijote
// DELETE http://localhost:3000/api/books/API_KEY=123abc

router.delete("/:title?", checkApiKey, booksController.deleteBook);

module.exports = router;