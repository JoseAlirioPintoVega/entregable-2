import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import imgWeather from './json/imgWeater.json'
import WeatherCard from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()
  const success = (pos)=>{
    
    setCoords({
      lat: pos.coords.latitude ,
      lon: pos.coords.longitude
    })
  }
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success)
  },[])
  
  useEffect(()=>{
    if(coords){
      const apiKey = '90cfc5627631b021096e2f85866beab5'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(URL)
      .then(res => {
        setWeather(res.data)
        const celsius = (res.data.main.temp - 273.15).toFixed(1) 
        const farenheit =  (celsius * (9/5) + 32).toFixed(1) 
          setTemp({celsius, farenheit})
        })
        .catch(err=> console.log(err))
      }
    },[coords])
    
  
    
    const img = weather?.weather[0].icon
    
    const objStyle = {
      backgroundImage : `url(${imgWeather[img]})`
    } 
    
    console.log(img)
    return (
      <div  style={objStyle}  className="App">
    <WeatherCard
    weather={weather}
    temp={temp}
    />
    </div>
  )
}

export default App
