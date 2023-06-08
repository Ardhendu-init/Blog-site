import mongoose from "mongoose";

const userShema = mongoose.Schema(
  {
    username: { type: String, require: [true] },
    email: { type: String, require: [true] },
    password: { type: String, require: [true] },
  },
  { timestamps: true }
);

export default mongoose.model("User", userShema);
