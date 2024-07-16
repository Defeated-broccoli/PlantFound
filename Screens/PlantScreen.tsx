import { useState } from 'react'
import { View, Text } from 'react-native'
import Plant from '../models/Plant'
import { getPlant } from '../api/plants'

export default function PlantScreen({ navigation, route }) {
  const [plant, setPlant] = useState<Plant>(getPlant(route.params.plantId))

  return (
    <>
      <View>
        {!plant && (
          <View>
            <Text>Loading...</Text>
          </View>
        )}
      </View>
      <View>
        {plant && (
          <View>
            <Text>{plant.species.name}</Text>
          </View>
        )}
      </View>
    </>
  )
}
