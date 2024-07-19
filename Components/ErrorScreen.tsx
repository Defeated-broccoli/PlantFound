import { SafeAreaView, View, Text, Image } from 'react-native'
import { backgroundStyle, mainStyle } from '../Constants/const'

const ErrorScreen = () => {
  return (
    <SafeAreaView
      style={{
        ...backgroundStyle,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          ...mainStyle,
          width: 200,
          height: 200,
          borderRadius: 40,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../assets/img/plant-logo.png')}
          style={{ width: 50, height: 50 }}
        />
        <Text
          style={{
            fontFamily: 'commingSoon',
            color: 'white',
            fontSize: 24,
            textAlign: 'center',
          }}
        >
          Something's fucked. Have a great day.
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default ErrorScreen
