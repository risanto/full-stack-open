const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: {
    type: String
  },
  author : {
    type: String
  },
  url: {
    typr: String
  },
  likes: {
    type: Number
  }
})

const Blog = mongoose.model ('Blog', blogSchema)

module.exports = { Blog }