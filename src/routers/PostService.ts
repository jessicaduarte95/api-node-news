import { Router } from "express";
import { postControllers } from "../controllers/PostController";

const router = Router();

router.post("/post/register/:id", postControllers.registerPost);


export default router;