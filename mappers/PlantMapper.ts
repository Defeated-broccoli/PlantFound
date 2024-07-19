import Plant from '../models/Plant'
import Room from '../models/Room'
import Species from '../models/Species'

interface RawPlantData {
  room_color: string
  description: string
  fertilizer_pref: number
  id: number
  img_url: string
  last_fertilized: string | null
  last_watered: string | null
  light_pref: string
  location: string
  name: string
  species: string
  water_pref: number
}

const mapRawDataToPlant = (data: RawPlantData): Plant => {
  const species: Species = {
    id: data.id,
    name: data.species,
    waterPref: data.water_pref,
    fertilizePref: data.fertilizer_pref,
    image: data.img_url,
    description: data.description,
  }

  const room: Room = {
    id: data.id,
    name: data.location,
    color: data.room_color,
  }

  const plant: Plant = {
    id: data.id,
    name: data.name,
    lastWatered: data.last_watered ? new Date(data.last_watered) : null,
    lastFertilized: data.last_fertilized
      ? new Date(data.last_fertilized)
      : null,
    species: species,
    room: room,
    locationDescription: data.location,
  }

  return plant
}

export { mapRawDataToPlant, RawPlantData }
