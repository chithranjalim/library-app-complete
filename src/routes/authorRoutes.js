const express = require("express");
const authorRouter = express.Router();
function router(nav)
    {

var authors = [
    {
        title: "joseph barbera",
        books: " Tom and Jerry, The Flintstones, Yogi Bear, Scooby-Doo, Top Cat, The Smurfs, Huckleberry Hound",
        img:"JBarbera.jpg"

    },
    
    {
        title: "j k rowling",
        books: "Harry Potter series , Cormoran Strike series",
        img:"J.K._Rowling.jpg"

    },
    
    {
        title: "basheer",
        books:"Balyakalasakhi, Shabdangal, Pathummayude Aadu, Mathilukal, Ntuppuppakkoranendarnnu",
        img:"basheer.jpg"

    }
]

authorRouter.get('/',function(req,res)
                {
                    res.render("author",
                    {
                        nav,
                        title:'Library',
                        authors
                    });
                });
authorRouter.get('/:id',function(req,res)
                                {
                                    const id = req.params.id;
                                    res.render("auth",
                                    {
                                        nav,
                                        title:'Library',
                                        author:authors[id]
                                    });
                                });
                                return authorRouter;
                            }
                        
module.exports =router;                               