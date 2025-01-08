import axios from 'axios';
import React, { useEffect, useState } from 'react'

const App = () => {
  const [city, setCity]=useState('')
  const[Weather,setWeather] =useState(null)
// const API_KEY ="8a75dafb04b24ef883d112152250701";


   useEffect(()=>{
    axios
    .get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
    .then((res)=>{
      console.log(res.data)
      setWeather(res.data)
    })
    .catch((err)=>{
      console.log(err)
      alert("There is an error")
    },[]);
   })


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
      <button onClick={setWeather} type="search">Search</button>
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