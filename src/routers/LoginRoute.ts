import { Router } from "express";
import { loginControllers } from "../controllers/LoginController";

const router = Router();

router.post("/login", loginControllers.login);

export default router;