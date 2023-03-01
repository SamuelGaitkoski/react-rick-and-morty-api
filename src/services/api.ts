import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
})

export const api = {
    getAllCharacters: async () => {
        let response = await axiosInstance.get('/character');
        return response.data;
    },
    getCharacterByName: async (name: string) => {
        let response = await axiosInstance.get(`/character/?name=${name}`);
        return response.data;
    },
    getAllLocations: async () => {
        let response = await axiosInstance.get('/location');
        return response.data;
    },
    getAllEpisodes: async () => {
        let response = await axiosInstance.get('/episode');
        return response.data;
    }
}