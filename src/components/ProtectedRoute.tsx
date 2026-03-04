import { type ReactNode, useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

interface Props {
  children: ReactNode
}

const ProtectedRoute = ({ children }: Props) => {
  const context = useContext(AuthContext)

  if (!context?.token) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

export default ProtectedRoute