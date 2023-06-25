import mongoose, { Schema } from "mongoose";

const wishlist = new Schema(
  {
    wishlistID: { type: Schema.Types.ObjectId, auto: true },
    auctionID: String,
    userId: String,
  },
  { timestamps: true }
);

export default mongoose.model("Wishlist", wishlist);
