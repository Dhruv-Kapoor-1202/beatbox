import express from "express";
import passport from "passport";

const songRouter = express.Router();

songRouter.post("/create");
songRouter.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false })
);
songRouter.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false })
);
songRouter.get(
  "/get/songname/:songName",
  passport.authenticate("jwt", { session: false })
);
songRouter.get("/get/all", passport.authenticate("jwt", { session: false }));
