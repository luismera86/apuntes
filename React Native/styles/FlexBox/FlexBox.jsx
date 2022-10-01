import { Text, View } from 'react-native'

import React from 'react'

export default function FlexBox() {
  return (
    <View>
      <View style={styles.caja1}>Caja 1</View>
      <View style={styles.caja2}>Caja 2</View>
      <View style={styles.caja3}>Caja 3</View>
    </View>
  )
}
/* 

// En este caso las 3 cajas se reparten el mismo espacio dentro de su contenedor padre que es container

const styles = StyleSheet.create({
    container: {
        flex: 1. // La propiedad fl.ex hace que el container se estire todo el espacio que le deja disponible el contenedor padre
    },
    caja1: {
        flex: 1,
    },
    caja3: {
        flex: 1,
    },
    caja2: {
        flex: 1,
    },
}); */

/* 

// En este caso las 2 cajas se reparten el mismo espacio 40% y la caja 3 ocupa el 20% de su contenedor padre que es container 

const styles = StyleSheet.create({
    container: {
        flex: 1. // La propiedad fl.ex hace que el container se estire todo el espacio que le deja disponible el contenedor padre
    },
    caja1: {
        flex: 4,
    },
    caja3: {
        flex: 4,
    },
    caja2: {
        flex: 2,
    },
}); */
