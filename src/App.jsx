import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [city, setCity]=useState('')
  const[Weather,setWeather] =useState(null)
const API_KEY ="8a75dafb04b24ef883d112152250701";


   useEffect(()=>{
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
    .then((res)=>{
      console.log(res.data)
      setWeather(res.data)
    })
    .catch((err)=>{
      console.log(err)
    },[]);
   })



      return (
    <div>
      <h1>Weather App</h1>
      <div className='container-top mt-20 flex flex-col '>
      <input type="text" name="city" placeholder='Seearch Location' />
      <button type="search">Search</button>
      </div>
      <div className='container-bottom '>
      <h2>City Name</h2>
      <h3>Temperature</h3>
      <h4>Weather</h4>
      </div>
    </div>
  
    
    



  )
}

export default App