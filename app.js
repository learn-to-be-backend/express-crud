const express = require('express')

const morgan = require('morgan')

const app = express()

// middleware 
app.use(morgan('dev'))

app.use(express.json())

app.use((req, res, next) => {
  console.log('this is a middleware')
  next()
})

const toursRoute = require('./routes/tourRoutes')
const usersRoute = require('./routes/userRoutes')

// routing
app.use('/api/v1/tours', toursRoute)
app.use('/api/v1/users', usersRoute)

// start server
const port = 5000
app.listen(port, () => {
  console.log(`server running on port ${port}`)
})