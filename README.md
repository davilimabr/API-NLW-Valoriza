
<p align="center">
    <img  src="https://i.imgur.com/EaT433R.png">
</p>

<h1 align="center">NLW Valoriza - API - NodeJS</h1>

## 🔖 Sobre 
Projeto desenvolvido na sexta edição da NextLevelWeek, evento realizado pela [RocketSeat](https://rocketseat.com.br/)

<hr>

## 🚀 Tecnologias
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [TypeORM](https://typeorm.io/#/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

## Rotas 
```bash
POST - /users
POST - /tags
POST - /login
POST - /compliment

GET - /users/compliments/send
GET - /users/compliments/received
GET - /tags
GET - /users
```


## 🛠 Instalação

- Instale [Node.js](https://nodejs.org/en/)

- Instale [Yarn](https://classic.yarnpkg.com/lang/en/)
```bash
# Clone o repositório 
git clone https://github.com/CarlMartins/nlwValoriza_api.git

# Instale as dependencias
$ yarn

# Rode as migrations
$ yarn typeorm migration:run

# Rode a API service
$ yarn dev
```

