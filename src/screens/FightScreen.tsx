import React from 'react'
import { useState } from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { usePokemons } from '../hooks/usePokemons';
import { ListItem } from '../interfaces/ListItem';

export const FightScreen = () => {

  //Estado para obtener los pokemones
  const {pokemonItems, isLoading} = usePokemons();

  //*LISTA UNO*/
  //Estado para manejar la lista UNO de pokemones
  const [listaUnoValue, setListaUnoValue] = useState(null);
  const [isListaUnoFocus, setIsListaUnoFocus] = useState(false);
  //Mapeo de los pokemones que retornó el API al arreglo
  //que requiere el dropdown
  let datosListaUno:ListItem[] = [];
  pokemonItems.map(function(pokemon){
    datosListaUno.push({ value: pokemon.url, label: pokemon.name });
  })


  //*LISTA DOS*/
  //Estado para manejar la lista UNO de pokemones
  const [listaDosValue, setListaDosValue] = useState(null);
  const [isListaDosFocus, setIsListaDosFocus] = useState(false);
  //Mapeo de los pokemones que retornó el API al arreglo
  //que requiere el dropdown
  let datosListaDos:ListItem[] = [];
  pokemonItems.map(function(pokemon){
    datosListaDos.push({ value: pokemon.url, label: pokemon.name });
  })

  if (isLoading) {
    return(
      <View>
        <ActivityIndicator color='blue' size={50}/>
      </View>
    )
  }

  return (
  <View>
    <Text style={styles.title}>Duelo de Pokemones</Text>
    <Dropdown
          style={[styles.dropdownUno, isListaUnoFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={datosListaUno}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isListaUnoFocus ? 'Seleccione un pókemon' : '...'}
          searchPlaceholder="Buscar..."
          value={listaUnoValue}
          onFocus={() => setIsListaUnoFocus(true)}
          onBlur={() => setIsListaUnoFocus(false)}
          onChange={item => {
            setListaUnoValue(item.value);
            setIsListaUnoFocus(false);
          }}
    />
    <Dropdown
          style={[styles.dropdownDos, isListaDosFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={datosListaDos}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isListaDosFocus ? 'Seleccione un pókemon' : '...'}
          searchPlaceholder="Buscar..."
          value={listaDosValue}
          onFocus={() => setIsListaDosFocus(true)}
          onBlur={() => setIsListaDosFocus(false)}
          onChange={item => {
            setListaDosValue(item.value);
            setIsListaDosFocus(false);
          }}
    />      
  </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },  
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdownUno: {
    height: 50,
    width:150,
    padd:10,
    top:30,
    left:10,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 15,
    position:'absolute'
  },
  dropdownDos: {
    height: 50,
    width:150,
    padd:10,
    top:30,
    right:10,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 15,
    position:'absolute'
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
