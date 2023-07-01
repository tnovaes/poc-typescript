import { validateSchema } from "../middlewares/validationSchema.middleware";
import * as charactersControllers from "../controllers/character.controllers";
import { Router } from "express";
import { characterSchema } from "../schemas/character.schema";

const characterRouter = Router();

characterRouter.get("/characters", charactersControllers.getCharacters);
characterRouter.post("/character", validateSchema(characterSchema), charactersControllers.insertCharacter);
characterRouter.put("/character/:id", validateSchema(characterSchema), charactersControllers.updateCharacter);
characterRouter.delete("/character/:id", charactersControllers.deleteCharacter);

export default characterRouter;