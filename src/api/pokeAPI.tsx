import axios from "axios";

const pokeAPI = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    params: {
        limit: '40',
        offset: '0'
    }
})

export default pokeAPI; 