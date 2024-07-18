import { useFonts } from 'expo-font'
import { Image, Text, View, ViewStyle } from 'react-native'

interface LogoProps {
  style?: ViewStyle
  title: string
}

const Logo = ({ style, title }: LogoProps) => {
  const [fontsLoaded, fontError] = useFonts({
    treeFont: require('../assets/fonts/treeFont.ttf'),
  })

  if (!fontsLoaded) return null

  return (
    <View
      style={{
        ...style,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={{
          height: 40,
          width: 250,
          resizeMode: 'contain',
        }}
        source={require('../assets/img/logo.png')}
      />
    </View>
  )
}

export default Logo
