const { mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    registrationID: {
        type: Number,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;