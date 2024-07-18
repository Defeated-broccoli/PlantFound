import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Plant from '../models/Plant'
import { useFonts } from 'expo-font'

interface CrisisFieldProps {
  title: string
  date: Date
  timeSpan: number
}

const CrisisField = ({ date, title, timeSpan }: CrisisFieldProps) => {
  const [crisisLevel, setCrisisLevel] = useState(0)

  const [fontsLoaded, fontError] = useFonts({
    commingSoon: require('../assets/fonts/commingSoon.ttf'),
  })

  if (!fontsLoaded) return null

  useEffect(() => {
    const dateNow = new Date()
    const difference = getDateDifference(date, dateNow)

    setCrisisLevel(difference / timeSpan)
  }, [])

  function getDateDifference(startDate: Date, endDate: Date): number {
    // Convert both dates to milliseconds
    const startMs = startDate.getTime()
    const endMs = endDate.getTime()

    // Calculate the difference in milliseconds
    const differenceMs = endMs - startMs

    // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
    const differenceDays = differenceMs / (1000 * 60 * 60 * 24)

    return differenceDays
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        backgroundColor:
          crisisLevel > 0.5
            ? `rgb(255 ${255 - crisisLevel * 255} ${255 - crisisLevel * 255})`
            : `rgb(${crisisLevel * 255} 255  ${crisisLevel * 255})`,
      }}
    >
      <Text style={{ fontFamily: 'commingSoon' }}>{title}</Text>
      <Text>{date.toDateString()}</Text>
    </View>
  )
}

export default CrisisField
