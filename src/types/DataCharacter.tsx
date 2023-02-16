import { Character } from "./Character";

export type DataCharacter = {
    info: {
        count: number;
        next: string;
        pages: number;
        prev: number | null;
    };
    results: Character[];
}