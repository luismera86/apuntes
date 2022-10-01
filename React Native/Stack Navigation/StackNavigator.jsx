import Pag1 from '../Pag1'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator() // Insertamos el creador de los stack

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {' '}
      {/* El Stack.Navigator es el contender de los stacks que van a estar dentro de este componente que se va a mostrar, cada stack corresponde a un componente de Screen individual  */}
      <Stack.Screen name='Pag1' component={Pag1} />
    </Stack.Navigator>
  )
}
export default StackNavigator
