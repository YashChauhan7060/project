import express from 'express';
import { signUp } from '../controllers/auth.controllers.js';

let authRouter = express.Router();

authRouter.post("/signup", signUp);

export default authRouter;