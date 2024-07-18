import Plant from '../models/Plant'
import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native'
import { RootStackParamList } from '../Navigation/NavProps'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'

interface PlantItemProps {
  plant: Plant
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const PlantItem = ({ plant, navigation }: PlantItemProps) => {
  const [fontsLoaded, fontError] = useFonts({
    commingSoon: require('../assets/fonts/commingSoon.ttf'),
  })

  if (!fontsLoaded) return null
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        borderRadius: 20,
        height: 150,
      }}
      onPress={() => navigation.navigate('PlantScreen', { plantId: plant.id })}
    >
      <View
        style={{
          backgroundColor: plant.room.color,
          width: 30,
          height: 30,
          borderRadius: 20,
          position: 'absolute',
          left: 10,
          top: 10,
          zIndex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            color: 'white',
            margin: 0,
            padding: 0,
            lineHeight: 25,
            fontFamily: 'commingSoon',
          }}
        >
          {plant.id}
        </Text>
      </View>
      <Image
        source={{
          uri: plant.species.image,
        }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
          borderColor: plant.room.color,
          borderWidth: 4,
        }}
      />
    </TouchableOpacity>
  )
}

export default PlantItem
