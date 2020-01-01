const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/Blog')

const { listOfBlogs } = require('../utils/list_helper')

const api = supertest(app)

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = listOfBlogs.map(blog => new Blog(blog))
  const promiseArr = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArr)
})

describe('GET /api/blogs', () => {
  test(
    'should return a correct amount of blog posts',
    async () => {
      const response = await api.get('/api/blogs')

      expect(response.status).toBe(200)
      expect(response.body).toMatchObject(expect.any(Array))
      expect(response.body.length).toBe(listOfBlogs.length)
    }
  )

  test(
    'should return an array of objects that each has property `id` instead of `_id`', async () => {
      const response = await api.get('/api/blogs')

      expect(response.status).toBe(200)
      expect(response.body).toMatchObject(expect.any(Array))

      response.body.forEach(obj => {
        expect(obj.id).toBeDefined()
      })
    }
  )

  test(
    'should return an array of objects that each does not have __v as one of its property', async () => {
      const response = await api.get('/api/blogs')

      expect(response.status).toBe(200)
      expect(response.body).toMatchObject(expect.any(Array))

      response.body.forEach(obj => {
        expect(obj.__v).toBeUndefined()
      })
    }
  )

  test(
    'should return an array of objects that have these properties: title, url, likes, and author with their respective types', async () => {
      const response = await api.get('/api/blogs')

      expect(response.status).toBe(200)
      expect(response.body).toMatchObject(expect.any(Array))

      response.body.forEach(obj => {
        expect(obj.title).toBeDefined()
        expect(typeof obj.title).toBe('string')

        expect(obj.url).toBeDefined()
        expect(typeof obj.url).toBe('string')

        expect(obj.likes).toBeDefined()
        expect(typeof obj.likes).toBe('number')

        expect(obj.author).toBeDefined()
        expect(typeof obj.author).toBe('string')
      })
    }
  )
})

describe('POST /api/blogs', () => {
  test('should successfully add the blog to database', async () => {
    const input = {
      title: "Mark Manson",
      author: "Mark Manson",
      url: "https://markmanson.net/",
      likes: 9
    }

    const response = await api
      .post('/api/blogs')
      .send(input)

    expect(response.status).toBe(201)
    expect(typeof response.body).toBe('object')

    const currentBlogs = await Blog.find()
    expect(currentBlogs.length).toBe(listOfBlogs.length + 1)

    const blogPosted = await Blog.findById(response.body.result.id)
    expect(blogPosted).toMatchObject(input)
  })

  test('when the likes property is missing from the request data, it will default to 0', async () => {
    const input = {
      title: "Mark Manson",
      author: "Mark Manson",
      url: "https://markmanson.net/"
    }

    const response = await api.post('/api/blogs').send(input)

    expect(response.status).toBe(201)
    expect(typeof response.body).toBe('object')

    expect(response.body.result.likes).toBe(0)
  })

  test('should return status code 400 when the title and url properties are missing from the request data', async () => {
    const input = {
      author: "Mark Manson",
    }

    const response = await api.post('/api/blogs').send(input)

    expect(response.status).toBe(400)
    expect(typeof response.body).toBe('object')
    
    expect(response.body.error).toBeDefined()  
  })
})

afterAll(() => {
  mongoose.connection.close()
})