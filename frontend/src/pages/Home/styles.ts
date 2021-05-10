import styled from 'styled-components'
import starGif from '../../src/starsGif.gif'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${starGif}) repeat;
`
export const Title = styled.h1`
  background-color: var(--background);
  padding: 10px;
`
