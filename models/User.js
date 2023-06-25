import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, auto: true },
    name: String,
    email: { type: String, unique: true },
    password: { type: String, minlength: 8 },
    status: { type: String, enum: ["Active", "Inactive"] },
    profileImage: String,
  },
  { timestamps: true }
);

export default mongoose.model("Users", userSchema);
