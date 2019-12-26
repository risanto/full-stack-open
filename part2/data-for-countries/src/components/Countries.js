import React from 'react'
import CountryName from './CountryName'
import CountryDetail from './CountryDetail'

const Countries = ({ countries }) => {

  const countryRows = () => {
    if (countries.length > 10)
      return 'Too many matches, specify another filter'

    else if (countries.length > 1 && countries.length < 10)
      return countries.map(
        (country, i) =>
          <CountryName 
            country={country} key={i} 
          />
      )

    else if (countries.length === 1) 
      return <CountryDetail country={countries[0]}/>
  }

  return (
    <section>
      {countryRows()}
    </section>
  )
}

export default Countries