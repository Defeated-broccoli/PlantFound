import { View, Text, ScrollView } from 'react-native'
import { mainStyle } from '../Constants/const'
import Plant from '../models/Plant'

interface DescriptionProps {
  plant: Plant
}

const Description = ({ plant }: DescriptionProps) => {
  return (
    <View
      style={{
        ...mainStyle,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
        margin: 5,
        flex: 1,
      }}
    >
      <ScrollView style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 24,
            flex: 1,
            color: 'white',
          }}
        >
          {plant.species.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            flex: 1,
            color: 'white',
          }}
        >
          {plant.species.description}
        </Text>
      </ScrollView>
    </View>
  )
}

export default Description
