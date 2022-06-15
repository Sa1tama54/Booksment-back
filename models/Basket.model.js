const mongoose = require("mongoose");

const basketSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  bookId: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Book",
    },
  ],
  totalPrice: {
    type: Number,
    default: 0,
  },
  amout: { type: Number, default: 0 },
});

const Basket = mongoose.model("Basket", basketSchema);
module.exports = Basket;
