import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
:root {
  --white: #fff;
  --background: #f2f3f5;
  --gray-line: #dcdde0;
  --text: #222121;
  --border-radius: 5px;
  --inputAndButtonHeight: 3rem;
  --font-family-principal: 'Raleway', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@media (max-width: 1080px) {
  html {
    font-size: 87.5%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 93.75%;
  }
}
body {
  background-color: var(--background);
}
body,
input,
textarea,
button {
  font: 400 1rem var(--font-family-principal);
  color: var(--text)
}
button {
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
`
