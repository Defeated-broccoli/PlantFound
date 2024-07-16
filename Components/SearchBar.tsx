import { useState } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import Logo from './Logo'

interface SearchBarProps {
  onTextInput: (text: string) => void
}

const SearchBar = ({ onTextInput }: SearchBarProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleSearchToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: 'green',
        flexDirection: 'row',
      }}
    >
      {isExpanded && (
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
            paddingLeft: 10,
          }}
        >
          <TextInput
            placeholder="Search"
            onChangeText={(text) => onTextInput(text)}
            style={{ fontSize: 24 }}
          ></TextInput>
        </View>
      )}
      {!isExpanded && (
        <Logo
          style={{
            width: '80%',
            justifyContent: 'center',
            paddingLeft: 10,
          }}
        />
      )}
      <Pressable
        onPress={() => handleSearchToggle()}
        style={{
          backgroundColor: 'red',
          width: '20%',
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Search</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default SearchBar
