import express from "express";
import { SignUp, SignIn, SignOut } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", SignUp);
authRouter.post("/signin", SignIn);
authRouter.get("/signout", SignOut);

export default authRouter;
