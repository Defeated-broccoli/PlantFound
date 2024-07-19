import Plant from '../models/Plant'
import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native'
import { RootStackParamList } from '../Navigation/NavProps'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { basicShadow } from '../Constants/const'
import NumberAbsolute from './NumberAbsolute'
import { useEffect, useState } from 'react'
import getCrisisLevel from '../utilities/CrisisUtility'

interface PlantItemProps {
  plant: Plant
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const PlantItem = ({ plant, navigation }: PlantItemProps) => {
  const [crisisLevel, setCrisisLevel] = useState(0)

  useEffect(() => {
    const crisis = getCrisisLevel(plant.lastWatered, plant.species.waterPref)

    setCrisisLevel(crisis)
  }, [])

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        borderRadius: 20,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => navigation.navigate('PlantScreen', { plantId: plant.id })}
    >
      <NumberAbsolute plant={plant} />
      {crisisLevel <= 0.8 && (
        <View
          style={{
            ...basicShadow,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            source={{
              uri: plant.species.image,
            }}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 20,
              borderColor: plant.room?.color,
              borderWidth: 4,
            }}
          />
        </View>
      )}
      {crisisLevel > 0.8 && (
        <View
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={require('../assets/img/grave.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />

          <View
            style={{
              width: 80,
              height: '50%',
              position: 'absolute',
              backgroundColor: 'darkgrey',
              borderRadius: 20,
              top: 25,
            }}
          >
            <Image
              source={{
                uri: plant.species.image,
              }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 20,
                borderColor: 'black',
                borderWidth: 2,
                opacity: 0.5,
              }}
            />
          </View>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default PlantItem
