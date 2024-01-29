const fs = require('fs').promises;

module.exports = async function apiCredentials(req, res, next) {
  const token = req.header('X-API-TOKEN');
  const authdata = await fs.readFile('./authdata.json', { encoding: 'utf-8' });

  const authorized = JSON.parse(authdata);

  if (token in authorized) {
    // Se tudo der certo, o middleware passará adiante os times contidos naquele token.
    req.userToken = authorized[token];
    next();
  } else {
    res.status(401).json({ message: 'Invalid or expired token.' });
  }
};