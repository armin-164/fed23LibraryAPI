var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
    res.json(bookArray);
});

router.post('/', function(req, res) {
  const newBook = {
    author: req.body.author,
    pages: req.body.pages,
    title: req.body.title,
    isLoaned: req.body.isLoaned,
    id: randomUUID()
  }
  bookArray.push(newBook);
  res.json(newBook);
})

router.get('/:bookId', function(req, res) {
  let id = req.params.bookId;
  let book = bookArray.find(book => book.id == id);

  if (book) {
    res.json(book)
  }
})
module.exports = router;
