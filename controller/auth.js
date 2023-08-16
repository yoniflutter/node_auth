const User = require("../models/user");
const bcrypt = require('bcrypt');

const validate = (e)=>{
    var error = {
        name: '',
        password: ''
    };
    if(e.code === 11000){
        error.name = 'This user name exists';
    }else{
        Object.values(e.errors).forEach(({ properties }) =>{
            error[properties.path] = properties.message;
        });
    }
    return error;
}

module.exports.index = (req, res)=>{
    res.render('index');
}

module.exports.home = (req, res)=>{
    res.render('home');
}

module.exports.login_get = (req, res)=>{
    res.render('login');
}

module.exports.signup_get = (req, res)=>{
    res.render('signup');
}

module.exports.login_post = (req, res)=>{
    res.send(req.body);
}
module.exports.signup_post = async (req, res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            password: hashedPassword
        });
        res.status(200).json(user)
    }catch (e){
        const err = validate(e);
        res.status(400).json({error: err});
    }
}

