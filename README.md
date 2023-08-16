## SIMPLE NODE JS AUTH

This project shows how authentication is done in node js with jwt (json web token)

To set up this project run the following command on the terminal

```bash
   npm i express mongoose ejs jsonwebtoken cookie-parser
```
To encrypt the password install bcrypt by running the following command.

```bash
   npm i bcrypt
```
If you haven't installed `nodemon` before install it using the following command

```bash
   npm i nodemon -g
```

To set up your server with express write down the following code

```javascript
   const express = require('express');
   const app = express();

   app.get('/', (req, res)=>{
    res.send('Hello');
   });

   app.listen(5000,()=>{
    console.log("Server listening at port 5000");
   });
```

To start the server run the following command

```bash
   npm run build
```

`Note:` If you are cloning this project you don't have to do all the above things you just have to write down the following command

```bash
   npm install
```



Just have fun with this project :grin:

