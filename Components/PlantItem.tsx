import Plant from '../models/Plant'
import { View, Text, Pressable } from 'react-native'
import { RootStackParamList } from '../Navigation/NavProps'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface PlantItemProps {
  plant: Plant
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const PlantItem = ({ plant, navigation }: PlantItemProps) => {
  return (
    <Pressable
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
        margin: 5,
      }}
      onPress={() => navigation.navigate('PlantScreen', { plantId: plant.id })}
    >
      <Text>{plant.id}</Text>
    </Pressable>
  )
}

export default PlantItem
