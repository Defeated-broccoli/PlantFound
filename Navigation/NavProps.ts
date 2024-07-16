import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RootStackParamList = {
  HomeScreen: undefined
  PlantScreen: {
    plantId: number
  }
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
type PlantScreenRouteProp = RouteProp<RootStackParamList, 'HomeScreen'>

export {
  RootStackParamList,
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
  PlantScreenNavigationProp,
  PlantScreenRouteProp,
}
