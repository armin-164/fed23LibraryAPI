var express = require("express");
var router = express.Router();

let bookArray = [
  {
    author: "J.K. Rowling",
    pages: 336,
    title: "Harry Potter and the Sorcerer's Stone",
    isLoaned: false,
  },
  {
    author: "George R.R. Martin",
    pages: 694,
    title: "A Game of Thrones",
    isLoaned: false,
  },
  {
    author: "Harper Lee",
    pages: 324,
    title: "To Kill a Mockingbird",
    isLoaned: false,
  },
  {
    author: "J.R.R. Tolkien",
    pages: 1178,
    title: "The Lord of the Rings",
    isLoaned: false,
  },
  {
    author: "Agatha Christie",
    pages: 272,
    title: "Murder on the Orient Express",
    isLoaned: false,
  },
  {
    author: "F. Scott Fitzgerald",
    pages: 180,
    title: "The Great Gatsby",
    isLoaned: false,
  },
  {
    author: "Gabriel García Márquez",
    pages: 368,
    title: "One Hundred Years of Solitude",
    isLoaned: false,
  },
  {
    author: "Mark Twain",
    pages: 224,
    title: "The Adventures of Tom Sawyer",
    isLoaned: false,
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
module.exports = router;
