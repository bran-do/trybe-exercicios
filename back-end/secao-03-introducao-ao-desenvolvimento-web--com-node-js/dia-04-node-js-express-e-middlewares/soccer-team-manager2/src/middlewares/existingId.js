// Adicionando um middleware para verificar a existência do ID passado via requisição
const existingId = (req, res, next) => {
  const { id } = req.params;
  const team = teams.find((team) => team.id === Number(id));
  
  team
    ? next()
    : res.sendStatus(400);
}

module.exports = existingId;