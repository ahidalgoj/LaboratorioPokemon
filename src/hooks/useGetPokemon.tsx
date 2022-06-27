import { useEffect, useState } from 'react'
import pokeAPI from '../api/pokeAPI';
import { PokemonInfo } from '../interfaces/PokemonInfo';

export const useGetPokemon = (uri:string) => {

    const [pokemonRecord, setPokemonRecord] = useState<PokemonInfo>();

    const getPokemonRecord = async () => {

        console.log(uri);
        
        const resp = await pokeAPI.get<PokemonInfo>(uri);

        setPokemonRecord(resp.data);
    }

    useEffect(() => {
        getPokemonRecord();
    }, [])
    
    return {
        pokemonRecord
    }
}
