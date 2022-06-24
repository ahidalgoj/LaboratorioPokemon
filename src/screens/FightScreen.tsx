import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import pokeAPI from '../api/pokeAPI'

export const FightScreen = () => {

    useEffect(() => {

        pokeAPI.get('/pokemon')
            .then( resp => {
                console.log(resp)
            })
    }, [])
    

    return (
    <View>
        <Text>Duelo entre Pokemones</Text>
    </View>
  )
}
