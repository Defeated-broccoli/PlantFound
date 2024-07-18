import { TouchableOpacity, Image } from 'react-native'
import { RootStackParamList } from '../Navigation/NavProps'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface NavButtonProp {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const NavButton = ({ navigation }: NavButtonProp) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack()
      }}
    >
      <Image
        source={require('../assets/img/bar-button.png')}
        style={{
          width: 50,
          height: 50,
          margin: 10,
          transform: [{ scaleX: -1 }],
        }}
      />
    </TouchableOpacity>
  )
}

export default NavButton
