import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import getCrisisLevel from '../utilities/CrisisUtility'

interface CrisisFieldProps {
  title: string
  date: Date
  timeSpan: number
  altText?: string
}

const CrisisField = ({ date, title, timeSpan, altText }: CrisisFieldProps) => {
  const [crisisLevel, setCrisisLevel] = useState(0)

  useEffect(() => {
    const isisLevel = getCrisisLevel(date, timeSpan)
    setCrisisLevel(isisLevel)
  }, [date])

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderColor: 'black',
        padding: 10,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        flex: 1,
        backgroundColor:
          altText != null
            ? '#FFEC5D'
            : crisisLevel > 0.8
            ? '#FF3C49'
            : title.includes('water')
            ? 'lightblue'
            : 'lightgreen',
      }}
    >
      <Text style={{ color: 'white', fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>
        {altText ?? date?.toDateString() ?? 'never'}
      </Text>
    </View>
  )
}

export default CrisisField
