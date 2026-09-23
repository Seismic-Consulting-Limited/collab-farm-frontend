import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const ProtectedRoute = ({ children, requireOnboarding = false }) => {
  const { isAuthenticated, isOnboarded } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (requireOnboarding && isOnboarded) {
    return <Navigate to="/dashboard" replace />
  }

  if (!requireOnboarding && !isOnboarded) {
    return <Navigate to="/onboarding_Basicinfo" replace />
  }

  return children
}
