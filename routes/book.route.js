const { Router } = require("express");
const { bookController } = require("../controllers/book.controller");

const routerBook = Router();

routerBook.post("/", bookController.createBook);
routerBook.get("/", bookController.getAllBook);
routerBook.get("/discount", bookController.getDiscountBook);
routerBook.get("/new", bookController.getNewBook);
routerBook.get("/:id", bookController.getOneBook);
routerBook.get("/genre/:id", bookController.getBooksOnGenre);
routerBook.get("/author/:id", bookController.getBooksOnAuthor);
routerBook.patch("/rating/:id", bookController.addReview);
routerBook.patch("/increment/:id", bookController.increment)
routerBook.patch("/decrement/:id", bookController.decrement)

module.exports = routerBook;
