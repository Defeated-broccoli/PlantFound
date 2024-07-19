import { useEffect, useState } from 'react'
import { View, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import Plant from '../models/Plant'
import { getPlant, postFertilized, postWatered } from '../api/plants'
import ActionButton from '../Components/ActionButton'
import CrisisField from '../Components/CrisisField'
import Description from '../Components/Description'
import NavBar from '../Components/NavBar'
import ErrorScreen from '../Components/ErrorScreen'
import { backgroundStyle, mainStyle } from '../Constants/const'
import MapButton from '../Components/MapButton'
import LoadingScreen from '../Components/Loadingscreen'
import NumberAbsolute from '../Components/NumberAbsolute'
import ActionField from '../Components/ActionField'
import Toast from 'react-native-root-toast'
import getCrisisLevel from '../utilities/CrisisUtility'

export default function PlantScreen({ navigation, route }) {
  const [plant, setPlant] = useState<Plant>(undefined)
  const [crisisLevel, setCrisisLevel] = useState<number>()

  useEffect(() => {
    getPlant(route.params.plantId)
      .then((res) => setPlant(res))
      .catch((error) => setPlant(null))
  }, [])

  useEffect(() => {
    if (plant)
      setCrisisLevel(
        getCrisisLevel(plant.lastWatered, plant.species?.waterPref)
      )
  }, [plant])

  const handleWateredPress = async (): Promise<boolean> => {
    const result = postWatered(plant.id)
      .then((res) => {
        setPlant(res)
        return true
      })
      .catch((error) => {
        console.error('error while watering: ', error)
        return false
      })
    return result
  }

  const handleFertilizePress = async (): Promise<boolean> => {
    const result = postFertilized(plant.id)
      .then((res) => {
        setPlant(res)
        return true
      })
      .catch((error) => {
        console.error('error while fertilizing: ', error)
        return false
      })
    return result
  }

  const handleSunPress = async (): Promise<boolean> => {
    Toast.show('😎👉👉', {
      duration: Toast.durations.SHORT,
      containerStyle: {
        backgroundColor: 'white',
        opacity: 0.9,
      },
    })
    return true
  }

  if (plant === undefined)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <NavBar navigation={navigation} plant={{ name: 'Warning' }} />
        <LoadingScreen />
      </SafeAreaView>
    )

  if (plant === null)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <NavBar navigation={navigation} plant={{ name: 'Warning' }} />
        <ErrorScreen />
      </SafeAreaView>
    )

  return (
    <>
      <SafeAreaView style={{ ...backgroundStyle, flex: 1 }}>
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
            <NumberAbsolute
              plant={plant}
              style={{
                width: 50,
                height: 50,
                left: 20,
                top: 20,
                borderRadius: 30,
                zIndex: 10,
              }}
            />
            <Image
              source={{
                uri: plant.species.image,
              }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                borderWidth: 5,
                borderColor: crisisLevel > 0.8 ? 'black' : plant.room.color,
              }}
            />
            {crisisLevel > 0.8 && (
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: 10,
                    backgroundColor: 'gray',
                    opacity: 0.6,
                    margin: 10,
                  }}
                ></View>
                <View
                  style={{
                    padding: 10,
                    width: '100%',
                    height: '100%',
                    margin: 10,
                  }}
                >
                  <Image
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      resizeMode: 'contain',
                      borderRadius: 10,
                      margin: 10,
                      tintColor: 'black',
                    }}
                    source={require('../assets/img/skull.png')}
                  />
                </View>
              </View>
            )}
          </View>
          <ScrollView
            style={{
              height: '50%',
            }}
          >
            <ActionField
              plant={plant}
              handleFertilizePress={handleFertilizePress}
              handleWateredPress={handleWateredPress}
              handleSunPress={handleSunPress}
            />

            <Description plant={plant} />
            <View style={{ height: 80 }}></View>
          </ScrollView>
        </View>
        <MapButton navigation={navigation} />
      </SafeAreaView>
    </>
  )
}
