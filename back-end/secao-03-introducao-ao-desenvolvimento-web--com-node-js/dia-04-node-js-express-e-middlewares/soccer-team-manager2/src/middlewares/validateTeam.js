// Adicionando um middleware para verificar se o formato do time passado via requisição é válido
const validateTeam = (req, res, next) => {
  const requiredProps = ['id', 'name', 'initials'];

  (requiredProps.every((prop) => prop in req.body))
    ? next()
    : res.sendStatus(400);
}

module.exports = validateTeam;