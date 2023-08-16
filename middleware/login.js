const jwt = require('jsonwebtoken');

const authenticate = (req, res, next)=>{
    const token = req.cookies.auth;
    if(token){
        jwt.verify(token, "test", (err, decoded)=>{
            if(err){
                console.log(err);
                res.redirect('/login');
            }else{
                console.log(decoded);
                next();
            }
        });
    }else{
        res.redirect('/login');
    }
}

module.exports = authenticate;