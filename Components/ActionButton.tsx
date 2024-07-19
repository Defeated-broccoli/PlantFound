import { useEffect, useState } from 'react'
import {
  Pressable,
  ViewStyle,
  Text,
  TouchableOpacity,
  TextStyle,
  Image,
  ImageSourcePropType,
} from 'react-native'

interface ActionButtonProps {
  onPress: () => Promise<boolean>
  viewStyle?: ViewStyle
  textStyle?: TextStyle
  title: string
  source: ImageSourcePropType
  isExecuted?: boolean
}

const ActionButton = ({
  onPress,
  viewStyle,
  textStyle,
  title,
  source,
  isExecuted,
}: ActionButtonProps) => {
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(isExecuted)
  }, [isExecuted])

  return (
    <TouchableOpacity
      onPress={async () => {
        const result = await onPress()
        setChecked(result)
      }}
      style={{
        ...viewStyle,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
      }}
    >
      <Image
        style={{ width: 50, height: 50 }}
        source={!checked ? source : require('../assets/img/check-button.png')}
      />
    </TouchableOpacity>
  )
}

export default ActionButton
