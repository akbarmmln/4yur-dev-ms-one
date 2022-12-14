require('dotenv').config();
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');

app.use(bodyParser.json({ type: 'application/json', limit: '100mb', parameterLimit: 100000, extended: true }));
app.use(bodyParser.urlencoded({ limit: '100mb', parameterLimit: 100000, extended: true }));
app.use(bodyParser.text());
app.use(helmet());

app.use('/', require('./routes'));

app.use((req, res, next) => {
    const err = new Error('Route Not Found');
    res.status(err.status || 404);
    res.json({
        message: err.message,
        error: true,
    });
});

app.use(function (req, res, next) {
    res.removeHeader("Server");
    next();
});

module.exports = app;