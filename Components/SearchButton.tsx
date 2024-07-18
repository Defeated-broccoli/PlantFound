import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import { RootStackParamList } from '../Navigation/NavProps'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface SearchButtonProp {
  onPress: () => void
  source: ImageSourcePropType
}

const SearchButton = ({ onPress, source }: SearchButtonProp) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}
    >
      <Image source={source} style={{ width: 30, height: 30 }} />
    </TouchableOpacity>
  )
}

export default SearchButton
