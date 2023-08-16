const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./router/router');
const cookieParser = require('cookie-parser');
const authenticate = require('./middleware/login');

mongoose.connect("mongodb://127.0.0.1:27017/nodeauth")
.then(()=>{
    console.log("Connected");
}).catch((e)=>{
    console.log(`An error occured ${e}`);
});

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("./public"));
app.use('', router);
app.use(cookieParser());

app.get('/',(req, res)=>{
    res.render('index');
})

app.get('/home', authenticate ,(req, res)=>{
    res.render('home');
})

app.listen(5000, ()=>{
    console.log("Server listening at port 5000");
});