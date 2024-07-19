import React, { useState } from 'react'
import { SafeAreaView, Image, ScrollView } from 'react-native'
import { backgroundStyle } from '../Constants/const'
import Pdf from 'react-native-pdf'
import NavBar from '../Components/NavBar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view'
import RotateButton from '../Components/RotateButton'

const MapScreen = ({ navigation, route }) => {
  const [rotate, setRotate] = useState(false)

  const toggleRotate = () => {
    setRotate((prev) => !prev)
  }

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <NavBar navigation={navigation} plant={{ name: 'Map' }} />
      <GestureHandlerRootView>
        <ReactNativeZoomableView maxZoom={5} minZoom={1}>
          <Image
            style={{
              transform: rotate ? [{ rotate: '90deg' }] : [{ rotate: '0deg' }],
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={require('../assets/img/office-map.png')}
          />
        </ReactNativeZoomableView>
      </GestureHandlerRootView>
      <RotateButton
        onPress={() => {
          toggleRotate()
        }}
      />
    </SafeAreaView>
  )
}

export default MapScreen
