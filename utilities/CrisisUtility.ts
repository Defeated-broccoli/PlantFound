export default function getCrisisLevel(
  lastDate: Date,
  prefTimeSpan: number
): number {
  const dateNow = new Date()
  const difference = getDateDifference(lastDate, dateNow)

  return difference ? difference / prefTimeSpan : 1
}

function getDateDifference(startDate: Date, endDate: Date): number {
  // Convert both dates to milliseconds
  const startMs = startDate?.getTime()
  const endMs = endDate?.getTime()

  // Calculate the difference in milliseconds
  const differenceMs = endMs - startMs

  // Convert milliseconds to days (1 day = 24 * 60 * 60 * 1000 milliseconds)
  const differenceDays = differenceMs / (1000 * 60 * 60 * 24)

  return differenceDays
}
