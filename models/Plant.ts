import PlantSpecies from './PlantSpecies'

export default interface Plant {
  id: number
  lastWatered: Date
  lastFertilized: Date
  species: PlantSpecies
}
