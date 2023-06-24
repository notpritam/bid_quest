import mongoose from "mongoose";

const connect = async () => {
  // Or:
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection Failed !!");
  }
};

export default connect;
