import React, { useState, useEffect } from 'react'
import weatherAPI from '../apis/weatherAPI'

const CountryDetail = ({ country }) => {

  let [weather, setWeather] = useState({})

  useEffect(() => {
    weatherAPI
      .get(`/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${country.capital}`)
      .then(({ data }) => {
        setWeather(weather = data.current)
      })
      .catch(err => console.log('err while fetching weather', err))
  }, [])

  const countryLanguagesList = () => {
    country.languages.map(
      (language, i) => <li key={i}>{language.name}</li>
    )
  }

  return (
    <section>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population.toLocaleString()}</p>

      <h2>languages</h2>
      <ul>{countryLanguagesList()}</ul>

      <img
        src={country.flag} alt={country.name}
        width="50%" height="50%"
      />

      <h1>Weather in Helsinki</h1>
      <p>
        <strong>temperature:</strong> {weather.temperature} Celsius
      </p>
      <img 
        src={weather.weather_icons 
            ? weather.weather_icons[0] : null} 
      />
      <p>
        <strong>wind: </strong>
        {weather.wind_speed} kph direction {weather.wind_dir}
      </p>

    </section>
  )
}

export default CountryDetail