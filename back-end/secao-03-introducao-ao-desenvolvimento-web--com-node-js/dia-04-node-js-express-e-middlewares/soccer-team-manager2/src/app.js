const express = require('express');
const existingId = require('./middlewares/existingId');
const validateTeam = require('./middlewares/validateTeam');

const app = express();

// Configuração para poder mandar JSON no body
app.use(express.json());

// Array inicial de times
const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

// Endpoint '/teams' com todos os times cadastrados
app.get('/teams', (req, res) => res.status(200).json({ teams }));

// Endpoint baseado no 'id' para retornar apenas o time informado nos parâmetros da requisição
app.get('/teams/:id', existingId, (req, res) => {
  const { id } = req.params;
  const team = teams.find((team) => team.id === Number(id));

  res.status(200).json({ team });
})

// Definindo método POST para cadastrar novos times através de um arquivo JSON
app.post('/teams', validateTeam, (req, res) => {
  const newTeam = {...req.body};
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