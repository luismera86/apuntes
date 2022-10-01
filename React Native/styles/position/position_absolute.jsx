import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

export default function position_absolute() {
  return (
    <View style={styles.container}>
      <Text>position_absolute</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    ...StyleSheet.absoluteFillObject, // Lo que haces es que estira el objeto por toda la pantalla relativo al contenedor padre como si pusieras position: 'absolute', bottom: 0, top: 0, left: 0, right: 0
  },
})
