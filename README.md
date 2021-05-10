# Login e registro de novo usuário 

  O aplicativo consiste em uma tela de login com autenticação de email e senha com utilização de validacão JWT em backend. 
  Para acessar a rota de Home é necessário que o usuário esteja logado, caso contrário irá retornar para a página de login.
  Ao inserir uma senha incorreta o usuário é notificado e também é possível visualizar a senha digitada através do ícone.
  
![bloggif_6095a307cfd9d](https://user-images.githubusercontent.com/66284603/117508249-a54cea00-af5e-11eb-9ea6-0af2abe9cf7a.gif)

  Na tela de cadastro são validados se a estrutura de e-mail é válida assim como se a senha contem mais de 6 caracteres incluindo um número, bem como se a confirmação e a senha são iguais. Além disso, é possível ver a senha que está digitando clicando no ícone ao lado da mesma.
  
  ![bloggif_6095a0e80c28e](https://user-images.githubusercontent.com/66284603/117507954-2c4d9280-af5e-11eb-9841-922d3a3aac05.gif)
  
A aplicação é baseada em React e utiliza as seguintes bibliotecas:

- React Router Dom
- Styled-components
- Styled-icons
- Axios

Este projeto possui um back-end(pasta server) e um front-end(pasta front-end)

o servidor é baseado em json server e o frontend foi criado a partir do comando [Create React App](https://github.com/facebook/create-react-app)

Quick Start
certifique-se que a versão do node instalada é maior que a 12.0.0 a versão do yarn seja maior ou igual a 1.22.0

Servidor
# Instalando json server
utilize o comando abaixo para instalar o json server

` npm install -g json-server `

## Baixar dependencias
Dentro da pasta server utilize o seguinte comando 
` yarn `

## Iniciar o servidor
Dentro da pasta server utilize o seguinte comando

`yarn start `


# Executando o Frontend
Os comandos abaixo devem ser executados dentro da pasta de Frontend

## Baixar dependencias
`yarn `

## Iniciar projeto
 `yarn start`



## Para saber mais sobre a biblioteaca utilizado para o projeto Frontend 

Para ver a utilização do comando [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
Para aprender mais sobre React, acesse: [React documentation](https://reactjs.org/).
