const Review = require("../models/Review.model");

module.exports.reviewController = {
  postReview: async (req, res) => {
    try {
     const createReview = await Review.create({
        user: req.user.id,
        text: req.body.text,
        grade: req.body.grade,
        book: req.body.book,
      });
      res.json(createReview)
    } catch (error) {
      res.json({error: 'Отзыв создан'});
    }
  },

  getReviews: async (req, res) => {
    try {
      const rev = await Review.find().populate("user book likes");
      res.json(rev);
    } catch (error) {
      res.json({error: 'Ошибка вывода отзыв'});
    }
  },

  getRevBookId: async (req, res) => {
    try {
      const rev = await Review.find({ book: req.params.id }).populate("user");
      res.json(rev);
    } catch (error) {
      res.json({error: 'Ошибка вывода отзыва по книге'});
    }
  },
  addLike: async (req, res) => {
    try {
      const like = await Review.findByIdAndUpdate(req.params.id, {
        $addToSet: { likes: req.body.likes },
      });
      res.json(like);
    } catch (error) {
      res.json({error: 'Ошибка добавления лайка на отзыв'});
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
  addDislike: async (req, res) => {
    try {
      const dilike = await Review.findByIdAndUpdate(req.params.id, {
        $addToSet: { dislikes: req.body.dislikes },
      });
      res.json(dilike);
    } catch (error) {
      res.json({error: 'Ошибка добавления лайка на отзыв'});
    }
  },
  delDislike: async (req, res) => {
    try {
      const dislikeDel = await Review.findByIdAndUpdate(req.params.id, {
        $pull: { dislikes: req.body.dislikes },
      });
      res.json(dislikeDel);
    } catch (error) {
      res.json({error: 'Ошибка удаления лайка на отзыв'});
    }
  },
};
