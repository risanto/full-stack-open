import React from 'react'

const Filter = ({ handleFilterInputChange }) => {
  return (
    <p>
      Find contact
      <input
        onChange={handleFilterInputChange}
      />
    </p>
  )
}

export default Filter