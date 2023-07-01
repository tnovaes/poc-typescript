import { CreateCharacter } from "@/protocols/character.protocol";
import { Request, Response } from "express";
import httpStatus from "http-status";
import * as characterServices from "../services/character.services";

export async function insertCharacter(req: Request, res: Response) {
    const newCharacter = req.body as CreateCharacter;

    try {
        await characterServices.registerCharacter(newCharacter);
        res.sendStatus(httpStatus.CREATED);

    } catch (err) {
        if (err.type === "CharacterAlreadyRegistered") {
            res.status(httpStatus.CONFLICT).send(err.message);
        } else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}

export async function getCharacters(req: Request, res: Response) {
    try {
        const characters = await characterServices.getCharacters();
        res.status(httpStatus.OK).send(characters);

    } catch (err) {
        if (err.type === "noCharactersRegistered") {
            res.status(httpStatus.NOT_FOUND).send(err.message);
        } else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
        }
    }
}

export async function updateCharacter(req: Request, res: Response) {
    const updatedCharacter = req.body as CreateCharacter;
    const { id } = req.params;
    const charId: number = parseInt(id);

    try {
        await characterServices.updateCharacter(updatedCharacter, charId);
        res.status(httpStatus.OK).send("Character updated");

    } catch (err) {
        if (err.type === "characterNotFound") {
            res.status(httpStatus.NOT_FOUND).send(err.message);
        } else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}

export async function deleteCharacter(req: Request, res: Response) {
    const { id } = req.params;
    const charId: number = parseInt(id);

    try {
        await characterServices.deleteCharacter(charId);
        res.status(httpStatus.OK).send("Character deleted");

    } catch (err) {
        if (err.type === "characterNotFound") {
            res.status(httpStatus.NOT_FOUND).send(err.message);
        } else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        }
    }
}