import connection from "../database/database.connection";
import { Character, CreateCharacter } from "@/protocols/character.protocol";

export async function insertCharacter(character: CreateCharacter) {
    const { name, level, alive } = character;
    const query = `INSERT INTO characters (name, level, alive) VALUES ($1, $2, $3)`
    const result = connection.query<CreateCharacter>(query, [name, level, alive]);
    return result;
}

export async function getCharacters() {
    const query = `SELECT * FROM characters;`
    const result = await connection.query<Character>(query);
    return result.rows;
}

export async function getCharacterByName(name: string) {
    const query = `SELECT * FROM characters WHERE name ILIKE $1;`
    const result = await connection.query<Character>(query, [name]);
    return result.rows;
}

export async function getCharacterById(id: number) {
    const query = `SELECT * FROM characters WHERE id = $1;`
    const result = await connection.query<Character>(query, [id]);
    return result.rows;
}

export async function updateCharacter(updatedCharacter: CreateCharacter, id: number) {
    const { name, level, alive } = updatedCharacter;
    const query = `UPDATE characters SET name = $1, level = $2, alive = $3 WHERE id = $4;`;
    const result = await connection.query<Character>(query, [name, level, alive, id]);
    return result;
}

export async function deleteCharacter(id: number) {
    const query = `DELETE FROM characters WHERE id = $1`;
    const result = await connection.query(query, [id]);
    return result;
}