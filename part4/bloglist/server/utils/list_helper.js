const listOfBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0
  }
]

const totalLikes = (blogs) => {
  return blogs.length === 0 ?
    0 : blogs.reduce(((sum, blog) => sum + blog.likes), 0)
}

const favoriteBlog = (blogs) => {
  return blogs.sort((a, b) => (b.likes - a.likes))[0]
}

const mostBlogs = (blogs) => {
  blogs.sort((a, b) => (a.author > b.author) ? false : true)

  let authors = [{ author: blogs[0].author, blogs: 1 }]

  blogs.forEach((blog, i) => {
    if (i !== 0) {
      if (blog.author === authors[authors.length - 1].author) {
        authors[authors.length - 1].blogs++
      } else {
        authors.push({ author: blog.author, blogs: 1 })
      }
    }
  })

  return authors.sort((a, b) =>
    (a.blogs < b.blogs) ? true : false)[0]
}

const mostLikes = (blogs) => {
  blogs.sort((a, b) => (a.author > b.author) ? true : false)

  let authors = [{ author: blogs[0].author, likes: blogs[0].likes }]

  blogs.forEach((blog, i) => {
    if (i !== 0) {
      if (blog.author === authors[authors.length - 1].author) {
        authors[authors.length - 1].likes += blog.likes
      } else {
        authors.push({ author: blog.author, likes: blog.likes })
      }
    }
  })

  return authors.sort((a, b) => b.likes - a.likes)[0]
}

module.exports = {
  listOfBlogs, totalLikes, favoriteBlog, mostBlogs, mostLikes
}