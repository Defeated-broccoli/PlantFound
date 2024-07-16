import Plant from '../models/Plant'
import PlantSpecies from '../models/PlantSpecies'

const SPECIES: PlantSpecies = {
  id: 1,
  name: 'TestName',
  waterDays: 7,
  fertilizeDays: 30,
}

const PLANTS: Plant[] = [
  {
    id: 1,
    lastWatered: new Date(),
    lastFertilized: new Date(),
    species: SPECIES,
  },
  {
    id: 2,
    lastWatered: new Date(),
    lastFertilized: new Date(),
    species: SPECIES,
  },
  {
    id: 3,
    lastWatered: new Date(),
    lastFertilized: new Date(),
    species: SPECIES,
  },
]

const getPlants = (): Plant[] => {
  return PLANTS
}

const getPlant = (plantID: number) => {
  return getPlants().find((p) => p.id === plantID)
}

export { getPlants, getPlant }
