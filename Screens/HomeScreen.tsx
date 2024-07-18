import { SafeAreaView } from 'react-native'
import PlantList from '../Components/PlantList'
import SearchBar from '../Components/SearchBar'
import { useState } from 'react'

export default function HomeScreen({ navigation, route }) {
  const [filterText, setFilterText] = useState<string>('')

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SearchBar
        onTextInput={(text) => setFilterText(text)}
        navigation={navigation}
      />
      <PlantList filterText={filterText} navigation={navigation} />
    </SafeAreaView>
  )
}
