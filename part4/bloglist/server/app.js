const { PORT, MONGO_URI } = require('./utils/config.js')
const { errorHandler } = require('./utils/middleware')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

  ; (async () => {
    try {
      const connected = await mongoose
        .connect(MONGO_URI,
          { useNewUrlParser: true, useUnifiedTopology: true }
        )
      if (connected) console.log('connected to mongodb')

    } catch (error) {
      console.log('err while connecting to mongodb:', error)
    }
  })()

app.use(cors())
app.use(morgan('dev'))

app.use('/', routes)

app.use(errorHandler)

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log('listening to port', PORT))
}

module.exports = app