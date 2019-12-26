import React from 'react'
import Person from './Person'

const Persons = ({ persons, removePerson }) => {
  
  const personRows = () => persons.map((person, i) =>
    <Person person={person} removePerson={removePerson} key={i}/>
  )

  return (
    <section>
      <h1>Numbers</h1>
      <div>{personRows()}</div>
    </section>
  )
}

export default Persons