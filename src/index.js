const express = require('express')
const morgan = require('morgan')
const path = require('path')
const history = require('connect-history-api-fallback')
const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(history())

// Routes
app.use('/api/weapons', require('./routes/weaponRoutes'))
app.use('/user', require('./routes/userRoutes'))

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})
