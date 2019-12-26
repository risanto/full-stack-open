import React, { useState } from 'react'
import CountryDetail from './CountryDetail'

const Country = ({ country }) => {

  let [countryDetailActive, setCountryDetailActive] =
    useState(false)

  const toggleCountryDetail = () => {
    setCountryDetailActive(
      countryDetailActive = !countryDetailActive
    )
  }

  return (
    <section>
      <p>
        {country.name} &nbsp;
        <button onClick={toggleCountryDetail}>show</button>
      </p>
      {
        countryDetailActive ?
          <CountryDetail country={country} /> : null
      }
    </section>
  )
}

export default Country