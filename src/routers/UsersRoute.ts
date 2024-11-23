import { Router } from "express";
import { usersControllers } from "../controllers/UsersController";

const router = Router();

router.post("/user/register", usersControllers.createUser);

export default router;
