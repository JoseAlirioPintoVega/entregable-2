import React from 'react'
import { useState } from 'react'

const WeatherCard = ({weather, temp}) => {
   
    const [isCelsius, setIsCelsius] = useState(true)

    const handleClick = () => {
        setIsCelsius(!isCelsius)
    }
  return (
   <article className='card'>
    <h1 className='card__title'>weather app</h1>
    <h2 className='card__sub-title'>city : {weather?.name}, {weather?.sys.country} </h2>
    <div className='card__body-container'>
        <div className='card__icon-container'>
            <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            <h3 className='card__temp'>{ isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h3>
        </div>
        <section className='card__data'>
            <h3 className='card__desciption'>"{weather?.weather[0].description}"</h3>
            <ul>
                <li className='card__list-item'><span className='card__span'>wind speed</span> {weather?.wind.speed} m/s</li>
                <li className='card__list-item'><i className="fa-solid fa-cloud"></i>   <span className='card__span'>Cloud:</span>{weather?.clouds.all} %</li>
                <li className='card__list-item'><i className="fa-solid fa-temperature-three-quarters"></i>  <span className='card__span'>Presure:</span> {weather?.main.pressure} mb</li>
            </ul>
        </section>
    </div>
    <button className='card__btn' onClick={handleClick}>Chance to   { isCelsius ? '°F':' °C'}</button>
   </article>
  )
}

export default WeatherCard