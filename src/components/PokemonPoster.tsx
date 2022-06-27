import React from 'react'
import { PokemonInfo } from '../interfaces/PokemonInfo'
import { View, Image } from 'react-native';

interface Props {
  pokemon: PokemonInfo
}

export const PokemonPoster = ({pokemon}: Props) => {
  return (
    <View>
      <Image 
        source={{uri:pokemon.sprites.front_default}}
      />     
    </View>
  )
}
