import React, { useState, useEffect } from 'react'
import countriesAPI from './apis/countriesAPI'

import Countries from './components/Countries'

const App = () => {
  let [countries, setCountries] = useState([])
  let [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    countriesAPI
      .get('/all')
      .then(({ data }) => setCountries(countries = data))
      .catch(err =>
        console.log('err while fetching countries data', err))
  })

  const handleFilterChange = (e) => {
    const filter = e.target.value

    const currentFiltered =
      countries.filter(
        country =>
          country.name.toLowerCase().includes(filter.toLowerCase())
      )
    
    setFilteredCountries(filteredCountries = currentFiltered)
  }

  return (
    <div>
      <p>
        find countries &nbsp;
        <input onChange={handleFilterChange} />
      </p>
      <Countries
        countries={
          filteredCountries.length > 0 ? filteredCountries : countries
        }
      />
    </div>
  )
}

export default App
