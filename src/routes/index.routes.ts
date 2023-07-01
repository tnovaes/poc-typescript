import { Router } from "express";
import characterRouter from "./character.routes";

const router = Router();
router.use(characterRouter);

export default router;