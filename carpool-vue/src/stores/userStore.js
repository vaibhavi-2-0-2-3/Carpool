import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios' // Assuming you're using axios for API calls

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const token = ref(null)
  const error = ref(null)

  const setUser = (userData) => {
    user.value = userData
  }

  const setToken = (authToken) => {
    token.value = authToken
    // Optional: Set token in localStorage or axios default headers
    localStorage.setItem('userToken', authToken)
    axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
  }

  const loginUser = async (email, password) => {
    try {
      // Replace with your actual API endpoint
      const response = await axios.post('/api/user/login', { email, password })
      
      setToken(response.data.token)
      setUser(response.data.user)
      
      error.value = null
      return true
    } catch (err) {
      error.value = err.response?.data?.message || 'Login failed'
      return false
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('userToken')
    delete axios.defaults.headers.common['Authorization']
  }

  return {
    user,
    token,
    error,
    setUser,
    setToken,
    loginUser,
    logout,
    isAuthenticated: () => !!user.value && !!token.value
  }
})