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
      message: 'Added blog to the list!', result
    })

  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id)
    // if (!deleted) throw { status: 404, message: 'Not found!' }
    // else {
      res.status(200).json({
        message: 'Deleted blog from the list', deleted
      })
    // }

  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { title, author, url, likes } = req.body
    const blog = { title, author, url, likes }

    const updated = await Blog
      .findByIdAndUpdate(req.params.id, blog,
        { new: true, omitUndefined: true })
    
    // if (!updated) throw { status: 404, message: 'Not found!'}
    // else {
      res.status(200).json({
        message: 'Updated a blog!', updated
      })
    // }

  } catch (error) {
    next(error)
  }
})

module.exports = router