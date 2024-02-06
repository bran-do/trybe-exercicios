const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.use(express.json())

app.get('/chocolates/search', async (req, res) => {
  const foundChocolates = await cacauTrybe.getChocolatesByName(req.query);

  res.status(foundChocolates.length === 0 ? 404 : 200)
    .json(foundChocolates);
});

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();

  res.status(200).json({ totalChocolates: chocolates.length });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const chocolates = await cacauTrybe.getAllChocolates();
  const foundIndex = chocolates.findIndex((chocolate) => chocolate.id === Number(id));

  if (foundIndex === -1) return res.status(404).end();

  cacauTrybe.updateChocolate(Number(id), req.body);
  res.status(200).json({ chocolate: {id: Number(id), name, brandId }});

})

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

module.exports = app;