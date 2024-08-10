import { useState } from "react"
import axios from "axios"
// priyanka
function Weather() 
{
    const[city,setcity]=useState("")

    const[weather,setweather]=useState('') 
    const [temp,settemp]=useState('')
    const [desc,setdesc]=useState(' ')

    function handlecity(evt)
    {
        setcity(evt.target.value)
    }  

    function getWeather(){
        var weatherData=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9f039a1dc1a2686603eec5318d505ef`)
        
        weatherData.then(function(success){
            
            console.log('clicked')
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
            var info=document.getElementById('inforr')
            info.style.display='block'
            
        }).catch(function(errormsg){console.log('erormsg')})
        
    }
    return (
        <div className="bg-black p-10 md:w-30  ">
            <div className=" bg-violet-400 p-10 rounded-md ">
                <h1 className="text-3xl font-bold ">Weather Reporter⛅</h1>
                <p className="pt-2">I can give you a weather report about your city!</p>
               
                <input onChange={handlecity} type="text" placeholder="enter your city name!" className="sm:w-10%  shadow-xl mt-2 border border-black rounded-md p-1 "></input><br></br>
                <button onClick={getWeather}  className=" bg-black text-white p-2 rounded-md mt-2">Get report</button>

                <div id="inforr" className=" mt-4 p-5 rounded-md shadow-2xl hidden ">
                    <h1 className="text-xl"><b>Weather: </b>{weather}</h1>
                    <p className="mt-2 text-xl"><b>Temperature: </b>{temp}</p>
                    <p className="text-xl mt-2"><b>Description: </b>{desc}</p>
                </div>
            </div>


        </div>
    )
}

export default Weather