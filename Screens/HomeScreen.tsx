import { SafeAreaView, View, Image } from 'react-native'
import PlantList from '../Components/PlantList'
import SearchBar from '../Components/SearchBar'
import { useState } from 'react'
import { backgroundStyle } from '../Constants/const'
import MapButton from '../Components/MapButton'

export default function HomeScreen({ navigation, route }) {
  const [filterText, setFilterText] = useState<string>('')

  return (
    <SafeAreaView style={{ ...backgroundStyle, flex: 1 }}>
      <SearchBar
        onTextInput={(text) => setFilterText(text)}
        navigation={navigation}
      />
      <PlantList filterText={filterText} navigation={navigation} />
      <MapButton navigation={navigation} />
    </SafeAreaView>
  )
}
