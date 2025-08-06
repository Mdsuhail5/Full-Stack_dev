const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect('mongodb+srv://u25mohammedsuhail:YVxeakksrkACekT8@cluster0.tz8peoj.mongodb.net/new_db');
const myuser = mongoose.model('User', {
    email: String,
    password: String
});

const myuser1 = new myuser({
    email: 'qwerty@gmail.com',
    password: 2468
})

myuser1.save()