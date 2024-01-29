// Adicionando um middleware para verificar se o formato do time passado via requisição é válido
const validateTeam = (req, res, next) => {
  const { name, initials } = req.body;

  if (!name) { return res.status(400).json({ message: "Property 'name' is mandatory." }) };
  if (!initials) { return res.status(400).json({ message: "Property 'initials' is mandatory" }) };

  next();
}  

module.exports = validateTeam;