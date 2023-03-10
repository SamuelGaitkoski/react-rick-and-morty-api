export type Character = {
    created: string;
    episode: string[];
    gender: "Male" | "Female";
    id: number;
    image: string;
    location: {
        name: string;
        url: string;
    };
    name: string;
    origin: {
        name: string;
        url: string;
    };
    species: string;
    status: "Alive" | "Dead";
    type: string;
    url: string;
};