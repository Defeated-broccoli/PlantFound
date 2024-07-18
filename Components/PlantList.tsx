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
      plants.current.filter(
        (p) =>
          p.species.name.toUpperCase().includes(filterText.toUpperCase()) ||
          p.name.toUpperCase().includes(filterText.toUpperCase()) ||
          p.room.name.toUpperCase().includes(filterText.toUpperCase()) ||
          p.id.toString() == filterText
      )
    )
  }, [plants, filterText])

  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
      }}
    >
      <FlatList
        scrollEnabled={true}
        data={filteredPlants}
        renderItem={({ item }) => (
          <PlantItem plant={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{
          gap: 10,
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}
        columnWrapperStyle={{ gap: 10 }}
        style={{ flex: 1, width: '100%' }}
      />
    </View>
  )
}

export default PlantList
