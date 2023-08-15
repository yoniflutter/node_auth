const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    name: String,
    password: String
})

const userModel = mongoose.model("user", userShema);

module.exports = userModel;