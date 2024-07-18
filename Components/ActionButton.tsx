import { useFonts } from 'expo-font'
import {
  Pressable,
  ViewStyle,
  Text,
  TouchableOpacity,
  TextStyle,
} from 'react-native'

interface ActionButtonProps {
  onPress: () => void
  viewStyle?: ViewStyle
  textStyle?: TextStyle
  title: string
}

const ActionButton = ({
  onPress,
  viewStyle,
  textStyle,
  title,
}: ActionButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...viewStyle,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flex: 1,
      }}
    >
      <Text
        style={{
          ...textStyle,
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default ActionButton
