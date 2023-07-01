export type Character = {
    id: number;
    name: string; 
    level: number;
    alive: boolean
}

export type CreateCharacter = Omit<Character, "id">;