import { Text, View, ViewStyle } from 'react-native'

interface PlantNameProps {
  style?: ViewStyle
  title: string
}

const PlantName = ({ style, title }: PlantNameProps) => {
  return (
    <View
      style={{
        ...style,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{ fontFamily: 'monicaGarden', color: 'white', fontSize: 30 }}
      >
        {title}
      </Text>
    </View>
  )
}

export default PlantName
