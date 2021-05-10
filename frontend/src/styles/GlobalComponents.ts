import styled from 'styled-components'
import { Form } from 'react-bootstrap'
import { Field } from 'formik'
import { Eye } from '@styled-icons/bootstrap/Eye'
import { EyeSlash } from '@styled-icons/bootstrap/EyeSlash'

export const FormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
`
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`

export const Label = styled(Form.Label)``
export const Input = styled(Field)`
  padding: 10px;
  height: 2rem;
  width: 15rem;
  border: none;
  border-radius: 5px;
  background-color: var(--gray-line);
  @media (min-width: 768px) {
    height: 2.5rem;
    width: 25rem;
  }
  @media (min-width: 1024px) {
    height: 4rem;
    width: 40rem;
  }
`
export const PasswordBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: var(--text);
`

export const Checkbox = styled.input`
  display: none;
`
export const ShowPasswordIcon = styled(Eye)`
  width: 1.5rem;
  height: 1.5rem;
  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
  @media (min-width: 1024px) {
    width: 3rem;
    height: 3rem;
  }
`
export const HidePasswordIcon = styled(EyeSlash)`
  width: 1.5rem;
  height: 1.5rem;
  @media (min-width: 768px) {
    width: 2rem;
    height: 2rem;
  }
  @media (min-width: 1024px) {
    width: 3rem;
    height: 3rem;
  }
`
export const DivisionLine = styled.hr`
  border: 1px solid var(--gray-line);
`
export const ErrorTag = styled.small``
