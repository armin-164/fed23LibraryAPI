var express = require("express");
const fs = require("fs");
var router = express.Router();


router.get("/", function (req, res) {
    fs.readFile("./books.json", (err, data) => {
      let books = JSON.parse(data);
      res.json(books)
    })
});

router.post('/', function(req, res) {
  fs.readFile("./books.json", (err, data) => {
    if (err) console.log('err', err);

    let books = JSON.parse(data);

    let newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);

    fs.writeFile("./books.json", JSON.stringify(books, null, 2), err => {
      if (err) console.log('err when add new book', err);
    })

    res.json(books)
  })
})

router.get('/:bookId', function(req, res) {
  let id = req.params.bookId;
  let book = bookArray.find(book => book.id == id);

  if (book) {
    res.json(book)
  }
})
module.exports = router;
