# Maratona Live Code Totvs - Totvs Chat

> Projeto do front-end criado durante o evento Maratona Live Code Totvs

## Tecnologias

- Typescript
- React Js
- Styled Components
- Material UI Icons
- Vite Js
- Redux
- Redux-Saga
- Socket.IO

### Bibliotecas adicionais

- emoji-picker-react
- axios
- redux
- react-redux
- redux-saga
- @reduxjs/toolkit
- socket.io-client

## Imagens do projeto

- <img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/totvs-chat-01.png" alt="Totvs Chat Imagem 01" width="450"/>

- <img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/totvs-chat-02.png" alt="Totvs Chat Imagem 02" width="450"/>

- <img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/totvs-chat-03.png" alt="Totvs Chat Imagem 03" width="450"/>

- <img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/totvs-chat-04.png" alt="Totvs Chat Imagem 04" width="450"/>

- <img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/totvs-chat-05.png" alt="Totvs Chat Imagem 05" width="450"/>

- <img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/totvs-chat-06.png" alt="Totvs Chat Imagem 06" width="450"/>

- <img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/totvs-chat-07.png" alt="Totvs Chat Imagem 07" width="450"/>

- <img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/totvs-chat-08.png" alt="Totvs Chat Imagem 08" width="450"/>

- <img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/totvs-chat-09.png" alt="Totvs Chat Imagem 09" width="450"/>

- <img src="https://raw.githubusercontent.com/rodolfoHOk/portfolio-img/main/images/totvs-chat-10.png" alt="Totvs Chat Imagem 10" width="450"/>

## Repositório do Back-End

- https://github.com/rodolfoHOk/totvs.chat-api

## Guia Redux e Redux-Saga

- Criar a store com @reduxjs-toolkit (src/store/index.ts)
- Criar o primeiro slice com @reduxjs-toolkit (src/store/reducers/contactSlice.ts)
- Criar o appReducer com combineReducers com redux (src/store/reducers/index.ts)
- Adicionar o appReducer ao store (src/store/index.ts)
- Adicionar o Provider do react-redux no main.tsx com o store (src/main.tsx)
- Criar a primeira saga com redux-saga (src/store/saga/contactSaga.ts)
- Criar o rootSaga com redux-saga e adicionar a primeira saga (src/store/saga/index.ts)
- Adicionar o saga middleware rootSaga ao store e rodar o saga middleware com o rootSaga (src/store/index.ts)
- Usar dispatch, com useDispatch, para despachar ações que mudam um estado da store
- Usar useSelector para buscar um estado na store

## Links úteis

- https://redux.js.org/
- https://react-redux.js.org/
- https://redux-saga.js.org/
- https://redux-toolkit.js.org/
