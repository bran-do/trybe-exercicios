const express = require('express');
require('express-async-errors');

const existingId = require('./middlewares/existingId');
const validateTeam = require('./middlewares/validateTeam');

// Array inicial de times
const teams = require('./utils/teams');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials'); // Vamos solicitar um token credencial

// Configuração para poder mandar JSON no body
app.use(express.json());

// Endpoint '/teams' com todos os times cadastrados
app.get('/teams', (req, res) => res.status(200).json({ teams }));

// À partir daqui, um token será exigido para ter acesso as requisições seguintes
app.use(apiCredentials);

// Endpoint baseado no 'id' para retornar apenas o time informado nos parâmetros da requisição
app.get('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((t) => t.id === Number(id));

  res.status(200).json({ team });
});

// Definindo método POST para cadastrar novos times através de um arquivo JSON
app.post('/teams', validateTeam, (req, res) => {
  
  // Antes de mais nada, verifica se outro time já não possui as mesmas iniciais requeridas
  if (teams.some((t) => t.initials === req.body.initials)) {
    return res.status(422).json({ message: "These initials are already in use by another team." });
  };

  // E verifica se o token autoriza o cadastro dessas iniciais
  if (!req.userToken.teams.includes(req.body.initials)) {
    return res.status(401).json({ message: "You're not authorized to register these initials." });
  };

  // Se estiver tudo certo, então registra o novo time
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

// Definindo método PUT para atualizar os times cadastrados baseado no 'id' e através de um arquivo JSON
app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

// Definindo método DELETE para poder deletar um time cadastrado baseado em seu 'id'
app.delete('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;