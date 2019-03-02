const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('./backend/models/db')
const router = require('./backend/routes/index')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/server', router);

const port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on port", port)

module.exports = app;
