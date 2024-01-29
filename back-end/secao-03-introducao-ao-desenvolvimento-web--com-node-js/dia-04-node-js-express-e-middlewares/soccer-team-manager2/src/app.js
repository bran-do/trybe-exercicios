const express = require('express');
require('express-async-errors');
const teamsRouter = require('./routes/teamsRouter');

const app = express();

// Configuração para poder mandar JSON no body
app.use(express.json());

// Usando o router teamsRouter
app.use('/teams', teamsRouter);

// Evitando o HTML padrão do Express em caso de status 404
app.use((req, res) => res.sendStatus(404));

module.exports = app;