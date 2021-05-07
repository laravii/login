import { Formik, Form as FormikForm } from 'formik'
import React, { useContext, useState } from 'react'
import * as yup from 'yup'
import { Button, Card } from 'react-bootstrap'
import { errorMessages } from '../../constants/messages'
import { AuthContext } from '../../contexts/Auth'
import {
  Checkbox,
  ShowPasswordIcon,
  HidePasswordIcon,
  DivisionLine,
  ErrorTag,
  FormGroup,
  Label,
  Input,
  PasswordBox,
  Title,
} from '../../styles/GlobalComponents'
import { LoadingIcon, ErrorMessage } from '../../styles/animations'
import { useHistory } from 'react-router'
import { ICredentials } from '../../constants/types'
import { Link } from 'react-router-dom'

const loginValidation = yup.object().shape({
  email: yup.string().required(errorMessages.AUTH.EMAIL),
  password: yup.string().required(errorMessages.AUTH.PASSWORD),
})

const Login: React.FC = () => {
  const history = useHistory()
  const { isLoading, setIsLoading, login, errorMessage } = useContext(
    AuthContext,
  )
  const [showPassword, setShowPassword] = useState('password')
  const settingShowPasswordIcon = showPassword === 'password'
  const initialValues = {
    email: '',
    password: '',
  }
  const showMePassword = (ev: any) => {
    const target = ev.target
    target.checked ? setShowPassword('text') : setShowPassword('password')
  }
  const handleLogin = async (values: ICredentials) => {
    setIsLoading(true)
    setTimeout(async () => {
      await login(values).then(() => {
        history.push('/home')
      })
    }, 500)
  }
  return (
    <Card>
      <Card.Header>
        <Title>SEJA BEM-VINDE</Title>
        <DivisionLine />
      </Card.Header>
      <Card.Body>
        {Boolean(errorMessage) && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleLogin(values)
          }}
          validationSchema={loginValidation}
        >
          {(props) => (
            <FormikForm>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="email@email.com" />
                <ErrorTag>{props.errors.email}</ErrorTag>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Senha</Label>
                <PasswordBox>
                  <Input id="password" name="password" type={showPassword} />
                  <Checkbox
                    type="checkbox"
                    onChange={(ev: any) => {
                      showMePassword(ev)
                    }}
                    id="showPassword"
                  />
                  <Label htmlFor="showPassword">
                    {settingShowPasswordIcon ? (
                      <ShowPasswordIcon />
                    ) : (
                      <HidePasswordIcon />
                    )}
                  </Label>
                </PasswordBox>
                <ErrorTag>{props.errors.password}</ErrorTag>
              </FormGroup>
              <Button variant="primary" type="submit">
                {isLoading ? <LoadingIcon /> : 'Entrar'}
              </Button>
            </FormikForm>
          )}
        </Formik>
        <DivisionLine />
        <h6>
          Ainda não tem cadastro? <Link to="/novo-usuário">Clique aqui </Link>{' '}
        </h6>
      </Card.Body>
    </Card>
  )
}

export default Login
