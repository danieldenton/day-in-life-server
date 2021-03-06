const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    name: String,
    content: String,
    user_id: String,
  },
  {
    timestamps: true,
  }
);

const PhotoSchema = new mongoose.Schema(
  {
    public_id: String,
    caption: String,
    comments: [CommentSchema],
  },
  {
    timestamps: true,
  }
);

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profile_url: String,
  photos: [PhotoSchema],
});

module.exports = mongoose.model("User", UserSchema);
