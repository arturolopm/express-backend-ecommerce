import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: String,
      require: true,
      default: false,
    },
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
