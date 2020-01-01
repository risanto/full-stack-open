const errorHandler = (err, req, res, next) => {
  console.error(err.message)
  let errStatus = err.status || 500
  let error = err.message

  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    errStatus = 400
    error = 'malformatted id'
  } else if (err.name === 'ValidationError') {
    errStatus = 400
  }

  res.status(errStatus).json({ error })
}

module.exports = { errorHandler }