import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "must provide name"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "must provide name"],
  },
});

const Registered =
  mongoose.models.Register || mongoose.model("Register", RegisterSchema);

export default Registered;
