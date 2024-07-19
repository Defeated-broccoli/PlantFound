import Plant from '../models/Plant'
import api from './api'
import { GET_PLANT, GET_PLANTS } from './endpoints'
import { mapRawDataToPlant, RawPlantData } from '../mappers/PlantMapper'

export const getPlants = async (): Promise<Plant[]> => {
  try {
    const { data } = await api.get<RawPlantData[]>(`${GET_PLANTS}`)
    const plants = data.map((rawPlant) => mapRawDataToPlant(rawPlant))

    return plants
  } catch (error) {
    console.error('Error fetching plants:', error)
    throw error
  }
}

export const getPlant = async (plantId: number): Promise<Plant> => {
  try {
    const { data } = await api.get<RawPlantData>(`${GET_PLANT}/${plantId}`)
    const plant = mapRawDataToPlant(data)

    return plant
  } catch (error) {
    console.error('Error fetching plant:', error)
    throw error
  }
}

export const postWatered = async (plantId: number): Promise<Plant> => {
  try {
    const { data } = await api.post(`plants/${plantId}/water`)
    const plant = mapRawDataToPlant(data)

    return plant
  } catch (error) {
    console.error('Error fetching plant:', error)
    throw error
  }
}

export const postFertilized = async (plantId: number): Promise<Plant> => {
  try {
    const { data } = await api.post(`plants/${plantId}/fertilize`)
    const plant = mapRawDataToPlant(data)

    return plant
  } catch (error) {
    console.error('Error fetching plant:', error)
    throw error
  }
}
