import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCaptainStore = defineStore('captain', () => {
  const captain = ref(null)
  const token = ref(null)
  const vehicle = ref(null)

  const setCaptain = (captainData) => {
    captain.value = captainData
  }

  const setToken = (authToken) => {
    token.value = authToken
  }

  const setVehicle = (vehicleData) => {
    vehicle.value = vehicleData
  }

  const clearCaptain = () => {
    captain.value = null
    token.value = null
    vehicle.value = null
  }

  const isAuthenticated = () => {
    return !!captain.value && !!token.value
  }

  return {
    captain,
    token,
    vehicle,
    setCaptain,
    setToken,
    setVehicle,
    clearCaptain,
    isAuthenticated
  }
})