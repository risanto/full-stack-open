import React from 'react'
import Course from './Course'

const Courses = ({ courses }) => {
  const courseRows = () => courses.map(course =>
    <Course
      key={course.id} course={course}
    />
  )

  return (
    <div>
      {courseRows()}
    </div>
  )
}

export default Courses