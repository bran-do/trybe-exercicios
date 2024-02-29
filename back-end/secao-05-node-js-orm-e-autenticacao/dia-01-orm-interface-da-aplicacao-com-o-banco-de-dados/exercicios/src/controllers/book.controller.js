const bookService = require('../services/book.service');

const error404Message = { message: 'Book not found'};
const error500Message = { message: 'Something went wrong' };

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    return res.status(200).json(books);

  } catch (e) {
    return res.status(500).json(error500Message)
  };
};

const getById = async (req, res) => {
  try { 
    const { id } = req.params;
  
    const book = await bookService.getById(id);
    if (!book) return res.status(404).json(error404Message);
  
    return res.status(200).json(book);

  } catch (e) {
    return res.status(500).json(error500Message);
  };
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
  
    const newBook = await bookService.create(title, author, pageQuantity);
  
    return res.status(201).json(newBook);

  } catch (e) {
    return res.status(500).json(error500Message);
  };
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
  
    const updatedBook = await bookService.update(id, title, author, pageQuantity);
    if (!updatedBook) return res.status(404).json(error404Message);
  
    return res.status(200).json({ message: 'Book updated!' });

  } catch (e) {
    return res.status(500).json(error500Message);
  };
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
  
    const deletedBook = await bookService.remove(id);
    if (!deletedBook) return res.status(404).json(error404Message);
  
    return res.status(200).json({ message: `Book with id ${id} deleted` });

  } catch (e) {
    return res.status(500).json(error500Message);
  };
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}