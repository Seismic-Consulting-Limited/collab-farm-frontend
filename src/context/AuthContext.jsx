import { createContext, useContext, useState } from 'react'
import { getAuthToken, removeAuthToken } from '../services/auth'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => !!getAuthToken())
  const [isOnboarded, setIsOnboarded] = useState(() => localStorage.getItem('is_onboarded') === 'true')

  const checkAuthStatus = () => {
    const token = getAuthToken()
    const onboardedStatus = localStorage.getItem('is_onboarded')
    
    setIsAuthenticated(!!token)
    setIsOnboarded(onboardedStatus === 'true')
  }

  const login = (token) => {
    localStorage.setItem('access_token', token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    removeAuthToken()
    localStorage.removeItem('is_onboarded')
    setIsAuthenticated(false)
    setIsOnboarded(false)
  }

  const setOnboardingComplete = () => {
    localStorage.setItem('is_onboarded', 'true')
    setIsOnboarded(true)
  }

  const resetOnboardingStatus = () => {
    localStorage.setItem('is_onboarded', 'false')
    setIsOnboarded(false)
  }

  const value = {
    isAuthenticated,
    isOnboarded,
    login,
    logout,
    setOnboardingComplete,
    resetOnboardingStatus,
    checkAuthStatus
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
