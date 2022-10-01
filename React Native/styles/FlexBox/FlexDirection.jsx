import { Text, View } from 'react-native'

import React from 'react'

export default function FlexDirection() {
  return (
    <View>
      <View style={styles.caja1}>Caja 1</View>
      <View style={styles.caja2}>Caja 2</View>
      <View style={styles.caja3}>Caja 3</View>
    </View>
  )
}
/* 


const styles = StyleSheet.create({
    container: {
         flex: 1.
         flexDirection: 'row' // los elementos hijos se ordenan en forma de filas 
    },
    caja1: {
        
    },
    caja3: {
        
    },
    caja2: {
        
    },
}); 

*/

/* 


const styles = StyleSheet.create({
    container: {
         flex: 1.
         flexDirection: 'row-reverse' // los elementos hijos se ordenan en forma de filas de manera invertida
    },
    caja1: {
        
    },
    caja3: {
        
    },
    caja2: {
        
    },
}); 

*/
