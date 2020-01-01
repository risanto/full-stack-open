const router = require('express').Router()
const routeBlogs = require('./blogs')

router.get('/', async (req, res) => console.log('ini home'))
router.use('/api/blogs', routeBlogs)

module.exports = router