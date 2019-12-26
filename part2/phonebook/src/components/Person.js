import React from 'react'

const Person = ({ person, removePerson }) => {
  return (
    <p>
      {person.name} {person.number} &nbsp;
      <button onClick={() => removePerson(person)}
      >delete</button>
    </p>
  )
}

export default Person