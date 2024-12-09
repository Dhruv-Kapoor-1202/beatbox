import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import passport from "passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-jwt";
import User from "./models/user.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

// mongoDB connection
connectDB();

// middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// TODO: Move this code block to a different file
// Passport JWT authenticating users
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.PASSPORT_JWT_SECRETKEY;

passport.use(
  new Strategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({
        _id: jwt_payload.identifier,
      });

      if (user) return done(null, user);
      else return done(null, false);
    } catch (error) {
      return done(error);
    }
  })
);

// Setup Route
app.get("/", (req, res) => {
  res.send("Backend for BeatBox Music Application's backend.");
});

// Routes
app.use("/auth", authRoutes);
// app.use("/song", songRoutes)
// app.use("/playlist", playlistRoutes)

// port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Hi Mom And Dad!!!\nServer Running in ${process.env.NODE_MODE} Mode on http://localhost:${PORT}`
  );
});
