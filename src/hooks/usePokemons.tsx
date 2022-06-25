import { useEffect, useState } from 'react'
import pokeAPI from '../api/pokeAPI';
import { PokemonList, PokemonItem } from '../interfaces/pokemonListInterface';

export const usePokemons = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [pokemonItems, setPokemonItems] = useState<PokemonItem[]>([]);

    const getPokemonItems = async () => {
        
        const resp = await pokeAPI.get<PokemonList>('/pokemon');

        setPokemonItems(resp.data.results);

        setIsLoading(false);
    }

    useEffect(() => {

        getPokemonItems();

    }, [])
    
  
    return {
        pokemonItems,
        isLoading
    }
}
