import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String, // will store a link to image as string
    required: true,
  },
  track: {
    type: String,
    required: true,
  },
  artist: {
    type: mongoose.Types.ObjectId, // whenever a user is created an id is also associated with that user, so since a artist is also a user who will have a email, name etc, so it will have an id as well so we use that id of user (thats why we give ref:user)
    ref: "User",
  },
});

const Song = new mongoose.model("Song", songSchema);

export default Song;
