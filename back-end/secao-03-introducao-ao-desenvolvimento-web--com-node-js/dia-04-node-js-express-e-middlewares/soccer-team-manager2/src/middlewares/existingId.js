const teams = require('../utils/teams');

// Adicionando um middleware para verificar a existência do ID passado via requisição
const existingId = (req, res, next) => {
  const { id } = req.params;
  const team = teams.find((t) => t.id === Number(id));
  
  if (!team) { return res.status(404).json({ message: 'Team not found.' }); }

  next();
};

module.exports = existingId;