//https://reactnavigation.org/docs/getting-started/
//if crashes add kotlin files etc

import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './Navigation/NavProps'
import HomeScreen from './Screens/HomeScreen'
import PlantScreen from './Screens/PlantScreen'
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator<RootStackParamList>()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

function App() {
  return (
    <>
      <StatusBar backgroundColor={'black'} />
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PlantScreen" component={PlantScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App
