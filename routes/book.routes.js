const { Router } = require("express");
const { bookController } = require("../controllers/Book.controllers");

const routerBook = Router();

routerBook.post("/", bookController.createBook);
routerBook.get("/", bookController.getAllBook);
routerBook.get("/:id", bookController.getOneBook);
routerBook.get("/genre/:id", bookController.getBooksOnGenre);

module.exports = routerBook;
