const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors());

mongoose.connect(process.env.DB_CONNECT, 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    () => console.log('Successfully connected to database')
);

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('Server is running on port 3333'));

// rotas
// - listar startups
// - falando sobre o INSMONIA
// - criar startup 
// - alterar startups
// - deletar startups

// - criar item
// - deletar item
// - listar itens

// - criar uma sessão

// hash passwords
// controle sessão com o jwt
// deploy dessa API no heroku

// começar o desenvolvimento do frontend