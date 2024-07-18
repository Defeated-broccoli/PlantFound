import Plant from '../models/Plant'
import Species from '../models/Species'

const SPECIES: Species = {
  id: 1,
  name: 'TestName',
  waterPref: 10,
  fertilizePref: 30,
  image:
    'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660073901-best-indoor-plants-zz-plant-1660073875.png?crop=1.00xw:0.802xh;0,0.168xh&resize=980:*',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

const betonRoom: Room = {
  id: 1,
  name: 'Beton room',
  color: '#3253a6',
}

const roomRoom: Room = {
  id: 1,
  name: 'Beton room',
  color: '#aa539c',
}

const PLANTS: Plant[] = [
  {
    id: 1,
    name: 'Ted',
    locationDescription: 'on the printer',
    room: betonRoom,
    lastWatered: new Date('2024-07-13'),
    lastFertilized: new Date('2024-07-17'),
    species: SPECIES,
  },
  {
    id: 2,
    name: 'Ted',
    locationDescription: 'on the printer',
    room: roomRoom,
    lastWatered: new Date('2024-07-12'),
    lastFertilized: new Date('2024-07-16'),
    species: SPECIES,
  },
  {
    id: 3,
    name: 'Ted',
    locationDescription: 'on the printer',
    room: roomRoom,
    lastWatered: new Date('2024-06-01'),
    lastFertilized: new Date('2024-07-15'),
    species: SPECIES,
  },
  {
    id: 4,
    name: 'Ted',
    locationDescription: 'on the printer',
    room: betonRoom,
    lastWatered: new Date('2024-07-10'),
    lastFertilized: new Date('2024-07-10'),
    species: SPECIES,
  },
  {
    id: 5,
    name: 'Ted',
    locationDescription: 'on the printer',
    room: betonRoom,
    lastWatered: new Date('2024-07-13'),
    lastFertilized: new Date('2024-07-13'),
    species: SPECIES,
  },
  {
    id: 6,
    name: 'Ted',
    locationDescription: 'on the printer',
    room: betonRoom,
    lastWatered: new Date(),
    lastFertilized: new Date(),
    species: SPECIES,
  },
  {
    id: 7,
    name: 'Ted',
    locationDescription: 'on the printer',
    room: betonRoom,
    lastWatered: new Date(),
    lastFertilized: new Date(),
    species: SPECIES,
  },
  {
    id: 8,
    name: 'Ted',
    locationDescription: 'on the printer',
    room: betonRoom,
    lastWatered: new Date(),
    lastFertilized: new Date(),
    species: SPECIES,
  },
  {
    id: 9,
    name: 'Ted',
    locationDescription: 'on the printer',
    room: betonRoom,
    lastWatered: new Date(),
    lastFertilized: new Date(),
    species: SPECIES,
  },
]

const getPlants = (): Plant[] => {
  return PLANTS
}

const getPlant = (plantID: number) => {
  return PLANTS.find((p) => p.id == plantID)
}

export { getPlants, getPlant }
