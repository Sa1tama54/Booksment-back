const Genre = require("../models/Genre.model");

module.exports.genreController = {
    postGenre: async (req, res) => {
        try {
            await Genre.create({
                name: req.body.name,
                description: req.body.description
            });
            res.json("Жанр добавлен");
          } catch (error) {
            res.json({error: 'Ошибка в добавлении жанра'});
          }
      },
    
      getGenre: async (req, res) => {
        try {
          const genre = await Genre.find({});
          res.json(genre);
        } catch (error) {
          res.json({error: 'Ошибка в выводе жанров'});
        }
      },
};