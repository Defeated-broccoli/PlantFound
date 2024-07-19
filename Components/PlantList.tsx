import { useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { getPlants } from '../api/plants'
import Plant from '../models/Plant'
import PlantItem from './PlantItem'
import { RootStackParamList } from '../Navigation/NavProps'
import getCrisisLevel from '../utilities/CrisisUtility'
import { useFocusEffect } from '@react-navigation/native'

interface PlantListProps {
  filterText: string
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const PlantList = ({ filterText, navigation }: PlantListProps) => {
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([])
  const [plants, setPlants] = useState<Plant[]>([])

  useFocusEffect(
    useCallback(() => {
      getPlants()
        .then((res) => setPlants(res))
        .catch((error) => {
          console.error('failed fetch', error)
          delay(500)
            .then((res) =>
              getPlants()
                .then((res) => setPlants(res))
                .catch()
            )
            .catch()
        })
        .finally()
    }, [])
  )

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }

  useEffect(() => {
    setFilteredPlants(
      plants
        .filter(
          (p) =>
            p.species.name.toUpperCase().includes(filterText.toUpperCase()) ||
            p.name.toUpperCase().includes(filterText.toUpperCase()) ||
            p.room.name.toUpperCase().includes(filterText.toUpperCase()) ||
            p.id.toString() == filterText
        )
        .sort(
          (a, b) =>
            getCrisisLevel(b.lastWatered, b.species.waterPref) -
            getCrisisLevel(a.lastWatered, a.species.waterPref)
        )
    )
  }, [plants, filterText])

  if (!plants) return null

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
