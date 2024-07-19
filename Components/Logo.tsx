import { Image, View, ViewStyle, Text } from 'react-native'

interface LogoProps {
  style?: ViewStyle
  title: string
}

const Logo = ({ style, title }: LogoProps) => {
  return (
    <View
      style={{
        ...style,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Image
        style={{
          height: 40,
          width: 40,
          resizeMode: 'contain',
        }}
        source={require('../assets/img/plant-logo.png')}
      />
      <Text
        style={{
          fontFamily: 'monicaGarden',
          color: 'white',
          fontSize: 24,
          marginTop: 5,
        }}
      >
        PlantFound
      </Text>
    </View>
  )
}

export default Logo
