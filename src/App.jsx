import axios from 'axios';
import React, { useState } from 'react'
import backgroundImg from './assets/Background-image.jpeg';  
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
    <div className='container flex flex-col bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1 className='items-center grid'>Weather App</h1>
      <div className='container-top mx-[8rem]  flex justify-around items-center bg-[rgba(151, 85, 85, 0.5)] rounded-full p-4 rounded-lg'>
        <input 
        className='p-4 rounded-full outline-none bg-neutral-50/50 text-black flex justify-center items-center'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          name="city" 
          placeholder='Search Location'
        />
        <button 
        className=' flex justify-center items-center rounded-full p-2 outline-none bg-white text-black hover:bg-black hover:text-white'
        onClick={handleSubmit} type="search">Search</button>
      </div>

      {loading ? (
        <p>Loading.....</p>
      ) : weather ? (
        <>
          <div className='container-bottom flex space-y-5 justify-center items-center mt-20'>
            <h2>City Name: {weather.location.name}</h2>
          </div>
          <div className="bg-neutral-50/75 rounded-lg justify-between flex p-4 m-[8rem] bg-[rgba(228, 213, 213, 0.1)]">
            <div>
            <h3>Wind Speed</h3>
            <p>{weather.current.wind_kph} km/h</p>
            </div>
            <div>
            <h3>Temperature</h3>
            <p>{weather.current.temp_c}°C</p>
            </div>
            <div>
            <h3>Wind Speed</h3>
            <p>{weather.current.wind_kph} km/h</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default App