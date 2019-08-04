'use strict'

var express = require('express'),
    bodyparser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000,
    controller = require('./controller'),
    routes = require('./routes');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

routes(app);

app.listen(port);