const express = require("express");
const app = new express();

const nav = [
                {link:'/books',name:'Books'},
                {link:'/authors',name:'Authors'},
                {link:'/addbooks',name:'add books'},
                {link:'/signup',name:'SignUp'},
                {link:'/login',name:'LogIn'},
               
            ]
const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const addbooksRouter = require('./src/routes/addbooksRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);


app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbooks',addbooksRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res)
                            {
                                res.render("index",
                                {
                                    nav,
                                    title:'Library'
                                });
                            });

                                          
app.listen(3000);