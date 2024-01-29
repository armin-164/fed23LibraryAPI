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
  fs.readFile("./books.json", (err, data) => {
    if (err) console.log('error retrieving', err);
    
    let books = JSON.parse(data);
    let id = req.params.bookId;

    let book = books.find(book => book.id == id);
    res.json(book);
  })
})

router.patch("/", (req, res) => {
  fs.readFile("./books.json", (err, data) => {
    if (err) console.log('err', err);

    let books = JSON.parse(data);
    let book = books.find(book => book.id == req.body.id);
    console.log(book.isLoaned);
    book.isLoaned = !book.isLoaned;

    fs.writeFile("./books.json", JSON.stringify(books, null, 2), (err) => {
      console.log('err', err);
    })
    
    res.json(book)
  })
})


module.exports = router;