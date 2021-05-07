import { Formik, Form as FormikForm } from 'formik'
import React, { ReactNode, useState } from 'react'
import { INewUser } from '../../constants/types'
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
import {
  LoadingIcon,
  ErrorMessage,
  SuccessMessage,
} from '../../styles/animations'
import * as yup from 'yup'
import { errorMessages, successMessages } from '../../constants/messages'
import { useHistory } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { newUser } from '../../services/newUser'

const loginValidation = yup.object().shape({
  email: yup.string().min(6).email().required('e-mail obrigatorio'),
  password: yup
    .string()
    .min(6)
    .max(16)
    .required('senha obrigatória')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      'A senha precisa ter mais de 6 digitos, e pelo menos um numero',
    ),
  confirmPassword: yup
    .string()
    .min(6)
    .required('senha obrigatória')
    .oneOf([yup.ref('password'), null], 'Senhas não correspondentes'),
})

const RegisterNewUser: React.FC = () => {
  const history = useHistory()

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setsuccessMessage] = useState('')
  const [showPassword, setShowPassword] = useState('password')
  const [showConfirmPassword, setShowConfirmPassword] = useState('password')

  const renderShowPasswordIcon = (type: any): ReactNode => {
    return type === 'password' ? <ShowPasswordIcon /> : <HidePasswordIcon />
  }

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  }

  const showMePassword = (ev: any, setFunction: any) => {
    const target = ev.target
    target.checked ? setFunction('text') : setFunction('password')
  }

  const postNewUser = async (values: INewUser) => {
    setIsLoading(true)
    setTimeout(async () => {
      await newUser(values)
        .then(() => {
          setsuccessMessage(successMessages.USER_CREATED)
          history.push('/home')
          setIsLoading(false)
        })
        .catch(() => {
          setErrorMessage(errorMessages.ALREADY_REGISTER)
        })
    }, 500)
  }
  return (
    <Card>
      <Card.Header>
        <Title>Faça seu cadastro</Title>
        <DivisionLine />
      </Card.Header>
      <Card.Body>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            postNewUser(values)
            actions.setSubmitting(false)
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
                      showMePassword(ev, setShowPassword)
                    }}
                    id="showPassword"
                  />
                  <Label htmlFor="showPassword">
                    {renderShowPasswordIcon(showPassword)}
                  </Label>
                </PasswordBox>
                <ErrorTag>{props.errors.password}</ErrorTag>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirme sua senha:</Label>
                <PasswordBox>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword}
                  />
                  <Checkbox
                    type="checkbox"
                    onChange={(ev: any) => {
                      showMePassword(ev, setShowConfirmPassword)
                    }}
                    id="showConfirmPassword"
                  />
                  <Label htmlFor="showConfirmPassword">
                    {renderShowPasswordIcon(showConfirmPassword)}
                  </Label>
                </PasswordBox>
                <ErrorTag>{props.errors.confirmPassword}</ErrorTag>
              </FormGroup>
              <Button variant="primary" type="submit">
                {isLoading ? <LoadingIcon /> : 'Criar'}
              </Button>
            </FormikForm>
          )}
        </Formik>
        {Boolean(errorMessage) && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {Boolean(successMessage) && (
          <SuccessMessage>{successMessage}</SuccessMessage>
        )}
      </Card.Body>
    </Card>
  )
}

export default RegisterNewUser
