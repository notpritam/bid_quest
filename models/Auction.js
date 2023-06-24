import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    title: {
      type: String,

      required: true,
    },
    shortDes: {
      type: String,

      required: true,
    },
    image: {
      type: String,

      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Auctions", postSchema);
