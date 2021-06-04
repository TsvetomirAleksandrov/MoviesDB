const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const auth = require('../middlewares/auth');

module.exports = (app) => {
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(cors());
    app.use(express.json());
    app.use(auth);
};