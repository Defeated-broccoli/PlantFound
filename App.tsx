//https://reactnavigation.org/docs/getting-started/
//if crashes add kotlin files etc

import * as React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from './Navigation/NavProps'
import HomeScreen from './Screens/HomeScreen'
import PlantScreen from './Screens/PlantScreen'
import { StatusBar } from 'react-native'
import CameraScreen from './Screens/CameraScreen'
import { useFonts } from 'expo-font'
import MapScreen from './Screens/MapScreen'
import { RootSiblingParent } from 'react-native-root-siblings'

const Stack = createNativeStackNavigator<RootStackParamList>()

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

function App() {
  const [fontsLoaded, fontError] = useFonts({
    commingSoon: require('./assets/fonts/commingSoon.ttf'),
    monicaGarden: require('./assets/fonts/monicaGarden.ttf'),
  })

  if (!fontsLoaded) return null

  return (
    <RootSiblingParent>
      <StatusBar backgroundColor={'black'} />
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="PlantScreen" component={PlantScreen} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen name="MapScreen" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  )
}

export default App
