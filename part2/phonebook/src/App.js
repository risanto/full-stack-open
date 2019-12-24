import React, { useState, useEffect } from 'react'
import axios from './configs/axios'

import Filter from './components/Filter'
import AddContact from './components/AddContact'
import Persons from './components/Persons'

const App = () => {
  let [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('/persons')
      .then(({ data }) => {
        setPersons(persons = data)
      })
      .catch(err => console.log('err fetching persons', err))
  }, [])

  let [filtered, setFiltered] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterInputChange = (event) => {
    event.preventDefault()
    setFiltered(filtered = [])

    setNewFilter(event.target.value)
    let currentFilter = []

    for (let person of persons) {
      if (
        person.name.toLowerCase()  
        .includes(event.target.value.toLowerCase())
      ) {
        currentFilter.push(person)
      }
    }
    setFiltered(filtered.concat(currentFilter))
  }

  const addNewContact = (event) => {

    event.preventDefault()

    for (let person of persons) {
      if (person.name === newName) {
        window.alert(`${newName} is already added to phonebook`)
        return
      }
    }

    setPersons(persons.concat([
      { name: newName, number: newNumber }
    ]))

    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        handleFilterInputChange={handleFilterInputChange}
      />
      <AddContact
        addNewContact={addNewContact}
        newName={newName} newNumber={newNumber}
        handleNameInputChange={handleNameInputChange}
        handleNumberInputChange={handleNumberInputChange}
      />
      <Persons persons={newFilter ? filtered : persons} />
    </div>
  )
}

export default App