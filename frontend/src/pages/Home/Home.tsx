import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { AuthContext } from '../../contexts/Auth'
import { LoadingIcon } from '../../styles/animations'

import { Container, Title } from './styles'

const Home: React.FC = () => {
  const history = useHistory()
  const { logout, setIsLoading, isLoading } = useContext(AuthContext)
  const handleLogout = () => {
    setIsLoading(true)
    setTimeout(async () => {
      logout()
      setIsLoading(false)
      history.replace('/')
    }, 500)
  }
  return (
    <Container>
      <Title>Congratulations You Are Authenticate</Title>
      <Button onClick={() => handleLogout()} variant="primary">
        {isLoading ? <LoadingIcon /> : 'Sair'}
      </Button>
    </Container>
  )
}

export default Home
