import { Image, TouchableOpacity, Text } from 'react-native'
import { basicShadow, mainStyle } from '../Constants/const'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigation/NavProps'

interface RotateButtonProps {
  onPress: () => void
}

const RotateButton = ({ onPress }: RotateButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
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
        source={require('../assets/img/rotate-button.png')}
        style={{ width: 50, height: 50 }}
      />
    </TouchableOpacity>
  )
}

export default RotateButton
