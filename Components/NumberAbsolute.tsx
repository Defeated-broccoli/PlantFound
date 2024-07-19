import { View, Text, ViewStyle } from 'react-native'
import Plant from '../models/Plant'

interface NumberAbsoluteProps {
  plant: Plant
  style?: ViewStyle
}

const NumberAbsolute = ({ plant, style }: NumberAbsoluteProps) => {
  return (
    <View
      style={{
        backgroundColor: plant.room?.color,
        width: 30,
        height: 30,
        borderRadius: 20,
        position: 'absolute',
        left: 10,
        top: 10,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
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
  )
}

export default NumberAbsolute
