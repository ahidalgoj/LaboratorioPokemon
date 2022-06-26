import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { usePokemons } from '../hooks/usePokemons';

export const FightScreen = () => {

  const {pokemonItems, isLoading} = usePokemons();


  if (isLoading) {
    return(
      <View>
        <ActivityIndicator color='blue' size={50}/>
      </View>
    )
  }

  return (
  <View>
    <Text>Duelo de Pokemones</Text>
  </View>
  )
}
