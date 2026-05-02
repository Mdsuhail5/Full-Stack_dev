const mongoose = require('mongoose');
const express = require('express');

const app = express();

mongoose.connect('#server connection link');
const myuser = mongoose.model('User', {
    email: String,
    password: String
});

const myuser1 = new myuser({
    email: 'qwerty@gmail.com',
    password: 2468
})

myuser1.save()