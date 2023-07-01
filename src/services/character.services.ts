import { CreateCharacter } from "@/protocols/character.protocol";
import * as characterRepository from "../repositories/character.repository";

export async function registerCharacter(character: CreateCharacter) {
    const characterRegistered = await characterRepository.getCharacterByName(character.name);
    if (characterRegistered.length) {
        throw {
            type: "characterAlreadyRegistered",
            message: "This character is already registered"
        }
    }

    const result = await characterRepository.insertCharacter(character);
    if (!result.rowCount) {
        throw {
            type: "characterInsertFailed",
            message: "This character could not be registered"
        }
    }

    return result;
}

export async function getCharacters() {
    const characters = await characterRepository.getCharacters();
    if (!characters.length) {
        throw {
            type: "noCharactersRegistered",
            message: "There are no characters registered yet"
        }
    }
    return characters;
}

export async function updateCharacter(updatedCharacter: CreateCharacter, id: number) {
    const searchCharacter = await characterRepository.getCharacterById(id);
    if (!searchCharacter.length) {
        throw {
            type: "characterNotFound",
            message: "Character not registered"
        }
    }

    const update = await characterRepository.updateCharacter(updatedCharacter, id);
    if (!update.rowCount) {
        throw {
            type: "updateCharacterFailed",
            message: "Failed to update character"
        }
    }

    return update;
}

export async function deleteCharacter(id: number) {
    const searchCharacter = await characterRepository.getCharacterById(id);
    if (!searchCharacter.length) {
        throw {
            type: "characterNotFound",
            message: "Character not registered"
        }
    }

    await characterRepository.deleteCharacter(id);

    return;
}
