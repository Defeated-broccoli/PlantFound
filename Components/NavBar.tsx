import { TextInput, View } from 'react-native'
import mainStyle from '../Constants/const'
import NavButton from './NavButton'
import { RootStackParamList } from '../Navigation/NavProps'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Logo from './Logo'
import Plant from '../models/Plant'
import SearchButton from './SearchButton'

interface NavBarProps {
  navigation: NativeStackNavigationProp<RootStackParamList>
  plant: Plant
}

const NavBar = ({ navigation, plant }: NavBarProps) => {
  return (
    <View
      style={{
        ...mainStyle,
        width: '100%',
        height: 50,
        flexDirection: 'row',
      }}
    >
      <SearchButton
        source={require('../assets/img/back-button.png')}
        onPress={() => {
          navigation.goBack()
        }}
      />
      <Logo title={plant.name} style={{ flex: 1 }} />
      <SearchButton
        source={require('../assets/img/qr-button.png')}
        onPress={() => {
          navigation.navigate('CameraScreen')
        }}
      />
    </View>
  )
}

export default NavBar