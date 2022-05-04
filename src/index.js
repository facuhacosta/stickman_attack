const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
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

console.log(process.env.NODE_ENV);
