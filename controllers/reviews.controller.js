const Review = require("../models/Review.model");

module.exports.reviewController = {
  postReview: async (req, res) => {
    try {
        await Review.create({
            text: req.body.text,
            grade: req.body.grade
        });
    } catch (err) {
      res.json(err);
    }
  },
  getRevBookId: async (req, res) => {
    try {
      const rev = await Review.find({ book: req.params.id }).populate("user");
      res.json(rev);
    }catch (err) {
      res.json(err);
    }
  },
  addLike: async (req, res) => {
    try {
   const like = await Review.findByIdAndUpdate(req.params.id, {
        $addToSet: { likes: req.body.likes },
      });
      res.json(like);
    } catch (err) {
      res.json(err);
    }
  },
  delLike: async (req, res) => {
    try {
      const likeDel = await Review.findByIdAndUpdate(req.params.id, {
        $pull: { likes: req.body.likes },
      });
      res.json(likeDel);
    } catch (err) {
      res.json(err);
    }
  },
};