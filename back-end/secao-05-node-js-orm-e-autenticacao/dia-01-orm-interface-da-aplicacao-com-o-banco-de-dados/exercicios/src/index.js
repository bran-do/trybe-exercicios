const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bookController = require('./controllers/book.controller');

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/books', bookController.getAll);
app.get('/books/:id', bookController.getById);