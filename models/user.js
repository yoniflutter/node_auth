const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Minimum password length is 6']
    }
});

userSchema.pre('save', async function (next){
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
});

userSchema.statics.login = async function(name, password){
    const user = await this.findOne({ name });
    if(user){
        const isLoggedIn = await bcrypt.compare(password, user.password);
        if(isLoggedIn){
            return user;
        }
        throw Error('Password incorrect');
    }
    throw Error('User not found');
}

const user = mongoose.model("user", userSchema);

module.exports = user;