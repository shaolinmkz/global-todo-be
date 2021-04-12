import mongoose from "mongoose";

const todo = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: String,
  text: String,
  completed: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

export default mongoose.model("Todo", todo);
