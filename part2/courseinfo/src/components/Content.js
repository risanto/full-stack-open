import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  const partRows = () => parts.map(part =>
    <Part
      key={part.id} part={part.name} exercises={part.exercises}
    />
  )

  return (
    <div>{partRows()}</div>
  )
}

export default Content