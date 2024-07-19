import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RootStackParamList = {
  HomeScreen: undefined
  PlantScreen: {
    plantId: number
  }
  CameraScreen: undefined
  MapScreen: undefined
}

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>

type PlantScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PlantScreen'
>
type PlantScreenRouteProp = RouteProp<RootStackParamList, 'PlantScreen'>

type CameraScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CameraScreen'
>
type CameraScreenRouteProp = RouteProp<RootStackParamList, 'CameraScreen'>

type MapScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MapScreen'
>
type MapScreenRouteProp = RouteProp<RootStackParamList, 'MapScreen'>

export {
  RootStackParamList,
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
  PlantScreenNavigationProp,
  PlantScreenRouteProp,
  CameraScreenNavigationProp,
  CameraScreenRouteProp,
  MapScreenNavigationProp,
  MapScreenRouteProp,
}
