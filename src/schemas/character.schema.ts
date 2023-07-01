import { CreateCharacter } from "@/protocols/character.protocol";
import joi from "joi";

export const characterSchema = joi.object<CreateCharacter>({
    name: joi.string().required(),
    level: joi.number().required(),
    alive: joi.boolean().required()
})