import { createContext, ReactNode, useState } from 'react'
import { errorMessages } from '../constants/messages'
import { ICredentials } from '../constants/types'
import { authenticate } from '../services/auth'

interface IAuthContextData {
  isActiveUser: boolean
  login(credentials: ICredentials): Promise<void>
  logout(): void
  isLoading: boolean
  setIsLoading: any
  errorMessage: string
}
interface IAuthProviderProps {
  children: ReactNode
}
export const AuthContext = createContext({} as IAuthContextData)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const userToken = localStorage.getItem('Token')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const login = async (credentials: ICredentials) => {
    await authenticate(credentials)
      .then((data) => {
        localStorage.setItem('Token', JSON.stringify(data.access_token))
      })
      .catch((error) => {
        setErrorMessage(errorMessages.WRONG_CREDENTIALS)
      })
      .finally(() => setIsLoading(false))
  }
  const logout = () => {
    localStorage.removeItem('Token')
  }
  return (
    <AuthContext.Provider
      value={{
        isActiveUser: userToken !== null && userToken !== undefined,
        isLoading,
        setIsLoading,
        login,
        logout,
        errorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
