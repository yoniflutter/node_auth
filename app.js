const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect("")
.then(()=>{
    console.log("Connected");
}).catch((e)=>{
    console.log(`An error occured ${e}`);
})

app.get('/', (req, res)=>{
    res.render("index");
});

app.listen(5000, ()=>{
    console.log("Server listening at port 5000");
})