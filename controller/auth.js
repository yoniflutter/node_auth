const User = require("../models/user");
const jwt = require('jsonwebtoken');

const validate = (e)=>{
    console.log(e.message, e.code);

    var error = {
        name: '',
        password: ''
    };


    if(e.code === 11000){
        error.name = 'This user name exists';
    }else if(e.message.includes('user validation failed')){
        Object.values(e.errors).forEach(({ properties }) =>{
            error[properties.path] = properties.message;
        });
    }else if(e.message === "User not found"){
        error.name = e.message;
    }else if(e.message === "Password incorrect"){
        error.password = e.message;
    }

    return error;
}

const createToken = (id)=>{
    return jwt.sign({ id }, "test", {
        expiresIn: 3600
    });
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

module.exports.login_post = async (req, res)=>{
    try{
        const user = await User.login(req.body.name, req.body.password);
        const token = createToken(user._id);
        res.cookie("auth", token, { httpOnly: true, maxAge: 1000 * 3600 })
        res.json({ user: user._id });
    } catch(e) {
        const err = validate(e);
        res.json({ error: err });
    }
}

module.exports.signup_post = async (req, res)=>{
    try{
        const user = await User.create({
            name: req.body.name,
            password: req.body.password
        });
        const token = createToken(user._id);
        res.cookie("auth", token, { httpOnly: true, maxAge: 1000 * 3600 })
        res.json({ user: user._id });
    } catch (e) {
        const err = validate(e);
        res.status(400).json({error: err});
    }
}

