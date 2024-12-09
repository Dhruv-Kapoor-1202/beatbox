import express from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth.js";
const authRouter = express.Router();

authRouter.post("/register", registerCtrl);
authRouter.post("/login", loginCtrl);

export default authRouter;
