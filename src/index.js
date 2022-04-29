const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: 'corvette2013',
  port: 3306,
  database: 'stickman_attack_db',
}, 'single'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Routes
app.use('/api', require('./routes/mainroute'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Starting the server
app.listen( app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
})