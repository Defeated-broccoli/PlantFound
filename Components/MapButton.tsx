import { Image, TouchableOpacity } from 'react-native'
import { basicShadow, mainStyle } from '../Constants/const'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigation/NavProps'

interface MapButtonProps {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const MapButton = ({ navigation }: MapButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MapScreen')}
      style={{
        ...mainStyle,
        ...basicShadow,
        width: 70,
        height: 70,
        position: 'absolute',
        right: 20,
        bottom: 20,
        borderRadius: 20,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={require('../assets/img/map-button.png')}
        style={{ width: 50, height: 50 }}
      />
    </TouchableOpacity>
  )
}

export default MapButton
