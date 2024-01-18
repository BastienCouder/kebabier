import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  sauce: String,
});

export default mongoose.model("Order", orderSchema);
