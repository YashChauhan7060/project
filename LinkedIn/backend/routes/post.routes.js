import express from "express"
import isAuth from "../middlewares/isAuth.js"
import upload from "../middlewares/multer.js"
import { createPost } from "../controllers/post.controllers.js"
const postRouter = express.Router()

postRouter.post("/create",isAuth,upload.single("image"),createPost)

export default postRouter