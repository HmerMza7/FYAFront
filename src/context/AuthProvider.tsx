import { useState, type ReactNode } from "react"
import { AuthContext} from "./AuthContext"

interface Props {
  children: ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem("token")
  })

  const login = (token: string) => {
    localStorage.setItem("token", token)
    setToken(token)
  }

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}