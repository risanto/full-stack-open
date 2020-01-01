const router = require('express').Router()
const Blog = require('../models/Blog')

router.get('/', async (req, res, next) => {
  try {
    const blogs = await Blog.find({})
    res.status(200).json(blogs)

  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const blog = new Blog(req.body)
    const result = await blog.save()
    
    res.status(201).json({
      message: 'Added a new blog!', result
    })

  } catch (error) {
    next(error)
  }
})

module.exports = router