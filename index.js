'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/user-routes');
const plantRoutes = require('./routes/plant-routes');
const app = express();

// const passport = require('passport');
// const initializePassport = require('./passport-config')
// initializePassport(passport)

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', userRoutes.routes);
app.use('/', plantRoutes.routes);

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port))