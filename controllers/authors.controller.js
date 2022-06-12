const Author = require("../models/Author.model");

module.exports.authorController = {
  
  postAuthor: async (req, res) => {
    try {
      await Author.create({
        name: req.body.name,
        description: req.body.description
      });
      res.json("Автор добавлен");
    } catch (error) {
      res.json({error: 'Ошибка в добавлении автора'});
    }
  },

  getAllAuthors: async (req, res) => {
    try {
      const Authors = await Author.find({})
      res.json(Authors);
    } catch (error) {
      res.json({error: 'Ошибка в выводе всех авторов'});
    }
  },

  getAllAuthorsById: async (req, res) => {
    try {
      const AuthorById = await Author.find({}).populate("bibliography");
      res.json(AuthorById);
    } catch (error) {
      res.json({error: 'Ошибка в выводе определенного автора'});
    }
  },
};
