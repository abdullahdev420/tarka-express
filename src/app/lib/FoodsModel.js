const { default: mongoose } = require("mongoose");

const FoodsModel = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  restaurentId: String,
});

export const foodSchema =
  mongoose.models.foods || mongoose.model("foods", FoodsModel);
