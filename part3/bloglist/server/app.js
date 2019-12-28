let { PORT, MONGO_URI } = require('./utils/config.js')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose
  .connect(MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(_ => console.log('connected to mongodb'))
  .catch(err =>
    console.log('err while connecting to mongodb:', err))

app.use(cors())
app.use(morgan('dev'))

app.listen(PORT, () => console.log('listening to port', PORT))