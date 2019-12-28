const router = require('express').Router()
const Blog = require('../models/Blog')

router.get('/api/blogs', (req, res) => {
  Blog.find().then(blogs => res.json(blogs))
})

router.post('/api/blogs', (req, res) => {
  const blog = new Blog(req.body)
  blog.save().then(result => res.status(201).json(result))
})

module.exports = router