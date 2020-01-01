require('dotenv').config()

let PORT = process.env.PORT
let MONGO_URI

if (process.env.NODE_ENV === 'test') {
  MONGO_URI = process.env.TEST_MONGO_URI
} else if (process.env.NODE_ENV === 'development') {
  MONGO_URI = process.env.DEV_MONGO_URI
}
  

module.exports = { PORT, MONGO_URI }