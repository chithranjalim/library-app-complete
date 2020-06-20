const express = require("express");
const bookRouter = express.Router();
function router(nav)
    {

var books = [
    {
        title: "tom and jerry",
        author: "joseph barbera",
        genre:"cartoon",
        img:"tom.jpg"

    },
    
    {
        title: "harry potter",
        author: "j k rowling",
        genre:"fiction",
        img:"harry.jpg"

    },
    
    {
        title: "pathuayude aadu",
        author: "basheer",
        genre:"novel",
        img:"basheer.jpg"

    }
]

bookRouter.get('/',function(req,res)
                {
                    res.render("books",
                    {
                        nav,
                        title:'Library',
                        books
                    });
                });

bookRouter.get('/:id',function(req,res)
                                {
                                    const id = req.params.id
                                    res.render("book",
                                    {
                                        nav,
                                        title:'Library',
                                        book:books[id]
                                    });
                                });
                                return bookRouter;
                            }
                        
module.exports =router;                               