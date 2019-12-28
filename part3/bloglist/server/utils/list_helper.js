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

module.exports = { totalLikes, favoriteBlog, mostBlogs, mostLikes }