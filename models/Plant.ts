import Room from './Room'
import Species from './Species'

export default interface Plant {
  id?: number
  name?: string

  lastWatered?: Date
  lastFertilized?: Date

  species?: Species
  room?: Room

  locationDescription?: string
}
