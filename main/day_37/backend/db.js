const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://u25mohammedsuhail:YVxeakksrkACekT8@cluster0.tz8peoj.mongodb.net/paychm")

const userSchema = mongoose.Schema({
    username: String,
    fname: String,
    lname: String,
    password: String,
})

const accountSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    balance: {
        type: Number,
        required: true,
    }
})
const User = mongoose.model("User", userSchema)
const Account = mongoose.model("Account", accountSchema)
module.exports = { User, Account };