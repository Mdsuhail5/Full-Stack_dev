const mongoose = require('mongoose')
const { maxLength, minLength, trim } = require('zod')

mongoose.connect("mongodb+srv://u25mohammedsuhail:YVxeakksrkACekT8@cluster0.tz8peoj.mongodb.net/my_paytm_app")

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
        unique: true,
        maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    fname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
    lname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30,
    },
}
)

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}