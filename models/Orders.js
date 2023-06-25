import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    orderId: { type: Schema.Types.ObjectId, auto: true },
    auctionId: String,
    userId: String,
  },
  { timestamps: true }
);

export default mongoose.model("Orders", orderSchema);
