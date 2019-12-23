import React from 'react'

const Total = ({ parts }) => {

  const totalExercises = () => {
    return parts.reduce((sum, part) => sum + part.exercises, 0)
  }

  return (
    <div>
      <p><strong>total of {totalExercises()} exercises</strong></p>
    </div>
  )
}

export default Total