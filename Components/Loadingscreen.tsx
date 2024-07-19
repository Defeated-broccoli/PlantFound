import { SafeAreaView, Image } from 'react-native'
import { backgroundStyle } from '../Constants/const'

const LoadingScreen = () => {
  return (
    <SafeAreaView
      style={{
        ...backgroundStyle,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ></SafeAreaView>
  )
}

export default LoadingScreen
