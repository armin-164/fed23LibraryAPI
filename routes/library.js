var express = require("express");
let {randomUUID} = require("crypto");
var router = express.Router();

let bookArray = [
  {
    author: "J.K. Rowling",
    pages: 336,
    title: "Harry Potter and the Sorcerer's Stone",
    isLoaned: false,
    id: randomUUID()
  },
  {
    author: "George R.R. Martin",
    pages: 694,
    title: "A Game of Thrones",
    isLoaned: false,
    id: randomUUID()
  },
  {
    author: "Harper Lee",
    pages: 324,
    title: "To Kill a Mockingbird",
    isLoaned: false,
    id: randomUUID()
  },
  {
    author: "J.R.R. Tolkien",
    pages: 1178,
    title: "The Lord of the Rings",
    isLoaned: false,
    id: randomUUID()
  },
  {
    author: "Agatha Christie",
    pages: 272,
    title: "Murder on the Orient Express",
    isLoaned: false,
    id: randomUUID()
  },
  {
    author: "F. Scott Fitzgerald",
    pages: 180,
    title: "The Great Gatsby",
    isLoaned: false,
    id: randomUUID()
  },
  {
    author: "Gabriel García Márquez",
    pages: 368,
    title: "One Hundred Years of Solitude",
    isLoaned: false,
    id: randomUUID()
  },
  {
    author: "Mark Twain",
    pages: 224,
    title: "The Adventures of Tom Sawyer",
    isLoaned: false,
    id: randomUUID()
  },
];

router.get("/", function (req, res) {
    res.json(bookArray);
});

router.post('/', function(req, res) {
  const newBook = {
    author: req.body.author,
    pages: req.body.pages,
    title: req.body.title,
    isLoaned: req.body.isLoaned
  }
  bookArray.push(newBook);
})

router.get('/:bookId', function(req, res) {
  let id = req.params.bookId;
  let book = bookArray.find(book => book.id == id);

  if (book) {
    res.json(book)
  }
})
module.exports = router;
