import { Text, View, ViewStyle } from 'react-native'

interface LogoProps {
  style: ViewStyle
}

const Logo = ({ style }: LogoProps) => {
  return (
    <View
      style={{
        ...style,
      }}
    >
      <Text>Logo</Text>
    </View>
  )
}

export default Logo
