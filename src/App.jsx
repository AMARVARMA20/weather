import React, {useState}from 'react';
import './App.css';
function App(){
  const[city,setCity]=useState('')
  const[temp,setTemp]=useState(false)
    const[weather,setWeather]=useState([])

    const searchWeather =()=>{
    const url="https://api.weatherapi.com/v1/forecast.json"
    const url_key='key=5144d4fbd339451fb2c122640252104'
    fetch(`${url}?${url_key}&q=${city}`)
    .then(response=>{
      if(!response.ok){
        alert("Location not found")
        setCity('')
      }
      else{
      response.json()
    .then(data=>{
      console.log(data)
      setWeather(data)
      setTemp(true) 
    })
       setCity('')
      
    }
   
   })
  }
    return(
      <>
      <div className="main">
        <img src="/cloud1.png" className="cloud cloud1" alt="cloud1" />
        <img src="/cloud2.png" className="cloud cloud2" alt="cloud2"/>
        <img src="/cloud3.png" className="cloud cloud3" alt="cloud3"/>
        <img src="/cloud4.png" className="cloud cloud4" alt="cloud4" />
        <div className="child1">
         <input id="input" type="text" value={city}
         placeholder='Enter your city name...'
         onChange={(event)=>{setCity(event.target.value)}}
         
         
         ></input>
         <button id="btn" onClick={searchWeather}>search</button>


        </div>
        {temp && <>

        <div className='child2'>
          <img id="img"src={weather.current.condition.icon} ></img>
          <h1 id="temp">{weather.current.temp_c}°C</h1>
        <h2 id="name">{weather.location.name} </h2>
        <h3 id="region">{weather.location.region}</h3>
        <h4 id="country">{weather.location.country}</h4>



        </div>

        <div className='child3'>
          <h1 className='sunrise'>Sunrise:{weather.forecast.forecastday[0].astro.sunrise}</h1>
          <h1 className='sunrise'>Sunset:{weather.forecast.forecastday[0].astro.sunset}</h1>
          <h1 className='sunrise'>max:{weather.forecast.forecastday[0].day.maxtemp_c}°C</h1>
          <h1 className='sunrise'>min:{weather.forecast.forecastday[0].day.mintemp_c}°C</h1>
        </div>

       </>}
      </div>


      </>



    )
}
export default App;