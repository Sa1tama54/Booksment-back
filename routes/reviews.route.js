const { Router } = require("express");
const { reviewController } = require("../controllers/reviews.controller");
const authmiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/", authmiddleware, reviewController.postReview);
router.get("/book/:id", reviewController.getRevBookId);
router.get("/", reviewController.getReviews);
router.patch("/likes/:id", authmiddleware, reviewController.addLike);
router.patch("/likes/remove/:id", authmiddleware, reviewController.delLike);
router.patch("/dislikes/:id", authmiddleware, reviewController.addDislike);
router.patch("/dislikes/remove/:id", authmiddleware, reviewController.delDislike);

module.exports = router;
