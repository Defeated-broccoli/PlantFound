import { useEffect, useState } from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'
import Plant from '../models/Plant'
import { getPlant } from '../api/plants'
import ActionButton from '../Components/ActionButton'
import CrisisField from '../Components/CrisisField'
import Description from '../Components/Description'
import NavBar from '../Components/NavBar'

export default function PlantScreen({ navigation, route }) {
  const [plant, setPlant] = useState<Plant>(null)

  useEffect(() => {
    const plantResult = getPlant(route.params.plantId)

    setPlant(plantResult)
  }, [])

  const handleWateredPress = () => {}

  const handleFertilizePress = () => {}

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        {!plant && (
          <View>
            <Text>Loading...</Text>
          </View>
        )}

        {plant && (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              flex: 1,
            }}
          >
            <NavBar navigation={navigation} plant={plant} />
            <View
              style={{
                height: '40%',
                width: '100%',
                padding: 10,
              }}
            >
              <Image
                source={{
                  uri: plant.species.image,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 10,
                }}
              ></Image>
            </View>

            <View
              style={{
                height: '50%',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <ActionButton
                  title="Watered"
                  onPress={() => {}}
                  viewStyle={{
                    backgroundColor: 'lightblue',
                  }}
                />
                <ActionButton
                  title="Fertilized"
                  onPress={() => {}}
                  viewStyle={{
                    backgroundColor: 'lightgreen',
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                }}
              >
                <CrisisField
                  date={plant.lastWatered}
                  title="Last watered: "
                  timeSpan={plant.species.waterPref}
                />
                <CrisisField
                  date={plant.lastFertilized}
                  title="Last fertilized: "
                  timeSpan={plant.species.fertilizePref}
                />
              </View>
              <Description plant={plant} />
            </View>
          </View>
        )}
      </SafeAreaView>
    </>
  )
}
