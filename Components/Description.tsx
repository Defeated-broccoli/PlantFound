import { View, Text, ScrollView } from 'react-native'
import mainStyle from '../Constants/const'
import Plant from '../models/Plant'
import { useFonts } from 'expo-font'

interface DescriptionProps {
  plant: Plant
}

const Description = ({ plant }: DescriptionProps) => {
  const [fontsLoaded, fontError] = useFonts({
    commingSoon: require('../assets/fonts/commingSoon.ttf'),
  })

  if (!fontsLoaded) return null

  return (
    <View
      style={{
        ...mainStyle,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        flex: 1,
      }}
    >
      <ScrollView>
        <Text
          style={{
            fontSize: 24,
            flex: 1,
            fontFamily: 'commingSoon',
          }}
        >
          {plant.species.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            flex: 1,
            fontFamily: 'commingSoon',
          }}
        >
          {plant.species.description}
        </Text>
      </ScrollView>
    </View>
  )
}

export default Description
