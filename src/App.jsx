import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [city, setCity]=useState('')
  const[Weather,setWeather] =useState(null)
// const API_KEY ="8a75dafb04b24ef883d112152250701";


   
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=9898b53d1a9d47a5906112700250801&q=${city}`);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
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
      onChange={(e)=>setCity(e.target.value)}
      type="text" name="city" 
      placeholder='Search Location'
       />
      <button onClick={handleSubmit(e)} type="search">Search</button>
      </div>
      {Weather? <div className='container-bottom '>
      <h2>City Name: {Weather.current.city}</h2>
      <h3>Temperature:{Weather.current.temp_c}</h3>
      {/* <h4>Weather</h4> */}
      </div>
      :<p>loading.....</p>}
     <div className="border rounded-lg p-4 m-4 bg-[rgba(228, 213, 213, 0.1)]">
       <h3>wind</h3>
       <p>{Weather.current.wind_kph}</p>
     </div>



    </div>
  
    
    



  )
}

export default App