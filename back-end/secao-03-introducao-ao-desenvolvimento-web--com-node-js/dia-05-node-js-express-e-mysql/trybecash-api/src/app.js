const express = require('express');

const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(express.json());

app.use('/people', peopleRoutes);

app.get('/people', (_req, res) => {
  res.status(200).json({ message: "hi"})
});

module.exports = app;