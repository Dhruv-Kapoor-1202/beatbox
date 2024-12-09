import Song from "../models/song.js";
import User from "../models/user.js";
import passport from "passport";

export const createCtrl = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
      message: "Error Creating song",
      error,
    });
  }
};
export const getMySongsCtrl = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
      message: "Error fetching songs",
      error,
    });
  }
};
export const getArtistsCtrl = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
      message: "Error fetching artists",
      error,
    });
  }
};
export const getSongCtrl = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
      message: "Error fetching songs",
      error,
    });
  }
};
export const getAlSongsCtrl = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send({
      message: "Error fetching songs",
      error,
    });
  }
};
