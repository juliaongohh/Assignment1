let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our book model

let Book = require('../model/books');
// get route for the book list page  - read operation

router.get('/',(req,res,next)=>{
    Book.find((err,bookList)=>{
        if(err){
            return console.error(err);
        }
        else {
            //console.log(BookList);
            res.render('book', {title: 'Book List', BookList:bookList});
        }
    });
});

module.exports = router;