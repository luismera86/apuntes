/* 

Para ver las dimensiones de una pantalla usamos el hook useWindowsDimensions()

*/

import { Text, View, useWindowDimensions } from 'react-native'

import React from 'react'

export default function Ver_dimensiones_de_pantalla() {
  const { width, height } = useWindowDimensions() // Importando este hook nos muestra el alto y ancho de la pantalla tanto en horizontal como en vertical
  return (
    <View>
      <Text>ver-dimensiones-de-pantall</Text>
    </View>
  )
}
