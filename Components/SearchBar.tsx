import { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import Logo from './Logo'
import mainStyle from '../Constants/const'
import SearchButton from './SearchButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigation/NavProps'

interface SearchBarProps {
  onTextInput: (text: string) => void
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const SearchBar = ({ onTextInput, navigation }: SearchBarProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const textInputRef = useRef(null)

  const handleSearchToggle = () => {
    setIsExpanded((prev) => !prev)
  }

  useEffect(() => {
    if (isExpanded) textInputRef.current.focus()
  }, [isExpanded])

  return (
    <>
      <View
        style={{
          ...mainStyle,
          width: '100%',
          height: 50,
          flexDirection: 'row',
        }}
      >
        <SearchButton
          source={
            !isExpanded
              ? require('../assets/img/search-button.png')
              : require('../assets/img/close-button.png')
          }
          onPress={() => {
            handleSearchToggle()
          }}
        />

        {isExpanded && (
          <TextInput
            ref={textInputRef}
            placeholder="search"
            style={{
              flex: 1,
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 32,
              fontWeight: 'bold',
              color: 'white',
              opacity: 0.5,
            }}
            placeholderTextColor="white"
            cursorColor="white"
            onChangeText={(t) => onTextInput(t)}
          />
        )}
        {!isExpanded && <Logo title="PlantFound" style={{ flex: 1 }} />}
        <SearchButton
          source={require('../assets/img/qr-button.png')}
          onPress={() => {
            navigation.navigate('CameraScreen')
          }}
        />
      </View>
    </>
  )
}

export default SearchBar
