import { Router } from "express";
import { authControllers } from "../controllers/AuthController";

const router = Router();

router.post("/auth/refresh/token", authControllers.refreshToken);

export default router;
