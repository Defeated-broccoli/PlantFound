import { useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { getPlants } from '../api/plants'
import Plant from '../models/Plant'
import PlantItem from './PlantItem'
import { RootStackParamList } from '../Navigation/NavProps'

interface PlantListProps {
  filterText: string
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const PlantList = ({ filterText, navigation }: PlantListProps) => {
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([])
  const plants = useRef<Plant[]>([])

  useEffect(() => {
    plants.current = getPlants()
  }, [])

  useEffect(() => {
    setFilteredPlants(
      plants.current.filter((p) =>
        p.species.name.toUpperCase().includes(filterText.toUpperCase())
      )
    )
  }, [plants, filterText])

  return (
    <View>
      <FlatList
        data={filteredPlants}
        renderItem={({ item }) => (
          <PlantItem plant={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  )
}

export default PlantList
