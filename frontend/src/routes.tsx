import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthContext } from './contexts/Auth'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import RegisterNewUser from './pages/RegisterNewUser/RegisterNewUser'

const Routes: React.FC = () => {
  const { isActiveUser } = useContext(AuthContext)
  const PrivateRoute = (component: any): React.ReactNode => {
    return isActiveUser ? component : <Redirect to="/" />
  }
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/novo-usuário" component={RegisterNewUser} />
      <Route exact path="/home">
        {PrivateRoute(<Home />)}
      </Route>
    </Switch>
  )
}

export default Routes
