import styled, { keyframes } from 'styled-components'
import { LoaderCircle } from '@styled-icons/boxicons-regular/LoaderCircle'

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`
const displayMessage = keyframes`
from{ 
opacity: 1;
}
to{
opacity: 0;
}`
export const LoadingIcon = styled(LoaderCircle)`
  width: 2rem;
  height: 2rem;
  animation: ${rotate} 2s linear infinite;
  animation-iteration-count: 1;
`
export const ErrorMessage = styled.div`
  font-weight: 900;
  padding: 10px;
  opacity: 0;
  background-color: red;
  color: white;
  animation: ${displayMessage} 5s ease-in-out;
  position: absolute;
  top: 5%;
  left: 80%;
  transform: translate(-50%, -50%);
`
export const SuccessMessage = styled(ErrorMessage)`
  background-color: green;
`
