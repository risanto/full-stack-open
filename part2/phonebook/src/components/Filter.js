import React from 'react'

const Filter = ({ handleFilterInputChange }) => {
  return (
    <p>
      Find contact &nbsp;
      <input
        onChange={handleFilterInputChange}
      />
    </p>
  )
}

export default Filter