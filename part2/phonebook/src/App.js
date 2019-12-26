import React, { useState, useEffect } from 'react'
import PersonService from './services/PersonService'

import Filter from './components/Filter'
import AddContact from './components/AddContact'
import Persons from './components/Persons'

const App = () => {
  let [persons, setPersons] = useState([])
  let [filtered, setFiltered] = useState([])

  let [newName, setNewName] = useState('')
  let [newNumber, setNewNumber] = useState('')
  let [newFilter, setNewFilter] = useState('')

  const fetchAllContacts = () => {
    PersonService
      .fetchAll()
      .then(persons => {
        setPersons(persons)
      })
      .catch(err => console.log('err fetching persons', err))
  }

  useEffect(() => {
    fetchAllContacts()
  }, [])

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
    const newContact = { name: newName, number: newNumber }

    for (let person of persons) {
      if (person.name.toLowerCase() === newName.toLowerCase()) {
        if (
          window.confirm(
            `${newName} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          PersonService
            .update(person.id, newContact)
            .then(returnedData => {
              setPersons(persons.map(personUpdate =>
                personUpdate.id !== person.id ? personUpdate : returnedData
              ))
              setNewName('')
              setNewNumber('')
              fetchAllContacts()
            })
        }
        return
      }
    }

    PersonService
      .add(newContact)
      .then(data => {
        setPersons(persons.concat([data]))
      })
      .catch(err =>
        console.log('err while adding new contact', err)
      )

    setNewName('')
    setNewNumber('')
  }

  const removePerson = (person) => {

    if (window.confirm(`Delete ${person.name}?`)) {
      PersonService
        .remove(person.id)
        .then(_ => {
          fetchAllContacts()
        })
        .catch(err =>
          console.log('err while removing a contact', err)
        )
    }
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
      <Persons
        persons={newFilter ? filtered : persons}
        removePerson={removePerson}
      />
    </div>
  )
}

export default App