import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  likedSongs: {
    type: String, // TODO : will make it array later - coz lot of songs can be there d
    default: "",
  },
  likedPlaylist: {
    type: String,
    default: "",
  },
  subscribedArtists: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    required: true,
    private: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
