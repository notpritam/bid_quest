import mongoose from "mongoose";

const { Schema } = mongoose;

const auctionSchemaJs = {
  _id: String,
  title: String,
  bid_count: Number,
  status: { type: String, enum: ["Active", "Stopped", "Closed"] },
  bid_mode: { type: String, enum: ["Manual", "Date"] },
  current_bid: Number,
  minimum_bid: Number,
  sellerId: String,
  description: String,
  bidder_details: [
    {
      time: Date,
      userId: String,
      bid: Number,
    },
  ],
  endDate: Date,
  startDate: Date,
  images: [
    {
      url: String,
      alt_text: String,
    },
  ],
};

const auctionSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, auto: true },
    title: String,
    bid_count: Number,
    status: { type: String, enum: ["Active", "Stopped", "Closed"] },
    bid_mode: { type: String, enum: ["Manual", "Date"] },
    current_bid: Number,
    minimum_bid: Number,
    sellerId: String,
    description: String,
    bidder_details: [
      {
        time: Date,
        userId: String,
        bid: Number,
      },
    ],
    endDate: Date,
    startDate: Date,
    images: [
      {
        url: String,
        alt_text: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Auctions", auctionSchema);
