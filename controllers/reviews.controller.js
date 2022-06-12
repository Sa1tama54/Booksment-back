const Review = require("../models/Review.model");

module.exports.reviewController = {
  postReview: async (req, res) => {
    try {
        await Review.create({
            text: req.body.text,
            grade: req.body.grade
        });
    } catch (error) {
      res.json({error: 'Ошибка в добавлении отзыва'});
    }
  },
  getRevBookId: async (req, res) => {
    try {
      const rev = await Review.find({ book: req.params.id }).populate("user");
      res.json(rev);
    }catch (error) {
      res.json({error: 'Ошибка в выводе отзыва на книгу'});
    }
  },
  addLike: async (req, res) => {
    try {
   const like = await Review.findByIdAndUpdate(req.params.id, {
        $addToSet: { likes: req.body.likes },
      });
      res.json(like);
    } catch (error) {
      res.json({error: 'Ошибка в добавлении лайка на отзыв'});
    }
  },
  delLike: async (req, res) => {
    try {
      const likeDel = await Review.findByIdAndUpdate(req.params.id, {
        $pull: { likes: req.body.likes },
      });
      res.json(likeDel);
    } catch (error) {
      res.json({error: 'Ошибка удаления лайка на отзыв'});
    }
  },
};