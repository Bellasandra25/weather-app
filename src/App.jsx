import axios from 'axios';
import React, { useState } from 'react'

const App = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=9898b53d1a9d47a5906112700250801&q=${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className='container flex flex-col justify-center items-center'>
      <h1>Weather App</h1>
      <div className='container-top mt-20 flex flex-col justify-between items-center'>
        <input 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          name="city" 
          placeholder='Search Location'
        />
        <button onClick={handleSubmit} type="search">Search</button>
      </div>

      {loading ? (
        <p>Loading.....</p>
      ) : weather ? (
        <>
          <div className='container-bottom'>
            <h2>City Name: {weather.location.name}</h2>
            <h3>Temperature: {weather.current.temp_c}°C</h3>
          </div>
          <div className="border rounded-lg p-4 m-4 bg-[rgba(228, 213, 213, 0.1)]">
            <h3>Wind Speed</h3>
            <p>{weather.current.wind_kph} km/h</p>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default App