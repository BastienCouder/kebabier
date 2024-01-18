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
  isValidated: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Order", orderSchema);
