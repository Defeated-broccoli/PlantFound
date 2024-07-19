import { View } from 'react-native'
import CrisisField from './CrisisField'
import Plant from '../models/Plant'
import ActionButton from './ActionButton'
import { mainStyle } from '../Constants/const'

interface ActionFieldProps {
  plant: Plant
  handleWateredPress: () => Promise<boolean>
  handleFertilizePress: () => Promise<boolean>
  handleSunPress: () => Promise<boolean>
}

const ActionField = ({
  plant,
  handleWateredPress,
  handleFertilizePress,
  handleSunPress,
}: ActionFieldProps) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 0,
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <CrisisField
          date={plant.lastWatered}
          title="Last watered: "
          timeSpan={plant.species.waterPref}
        />
        <ActionButton
          title="Watered"
          onPress={() => handleWateredPress()}
          viewStyle={{
            backgroundColor: 'lightblue',
          }}
          source={require('../assets/img/water-button.png')}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CrisisField
          date={plant.lastFertilized}
          title="Last fertilized: "
          timeSpan={plant.species.fertilizePref}
        />
        <ActionButton
          title="Fertilized"
          onPress={() => handleFertilizePress()}
          viewStyle={{
            backgroundColor: 'lightgreen',
          }}
          source={require('../assets/img/fertilize-button.png')}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <CrisisField
          date={plant.lastFertilized}
          title="Last shined with your beautiful smile:"
          timeSpan={plant.species.fertilizePref}
          altText="NOW!"
        />
        <ActionButton
          title="Fertilized"
          onPress={() => handleSunPress()}
          viewStyle={{
            backgroundColor: '#FFEC5D',
          }}
          source={require('../assets/img/sun-button.png')}
        />
      </View>
    </View>
  )
}

export default ActionField
