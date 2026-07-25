import { Navigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function GuestRoute({ children }) {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return <Navigate to="/home" replace />
  }

  return children
}
