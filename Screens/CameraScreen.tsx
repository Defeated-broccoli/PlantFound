import {
  BarcodeScanningResult,
  CameraView,
  useCameraPermissions,
} from 'expo-camera'
import { View, Text, Button } from 'react-native'

const CameraScreen = ({ navigation, route }) => {
  const [permission, requestPermission] = useCameraPermissions()

  const handleBarCodeScan = (result: BarcodeScanningResult) => {
    const regex = /^https:\/\/(\d+)\.com$/
    const match = result.data.match(regex)

    if (match) {
      const id = match[1]
      navigation.navigate('PlantScreen', { plantId: id })
    } else {
      console.log('No match found')
    }
  }

  if (!permission) return <View></View>

  if (!permission.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <CameraView
        style={{ flex: 1 }}
        onBarcodeScanned={(result) => {
          handleBarCodeScan(result)
        }}
      ></CameraView>
    </View>
  )
}

export default CameraScreen
