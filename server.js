const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    port = process.env.PORT || 3000,
    routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);