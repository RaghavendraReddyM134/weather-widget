import Weather from "./searchbox.jsx";
import Infobox from "./infobox.jsx";
import {useState} from "react";

export default function Weatherapp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Delhi",
        feelsLike: 39.05,
        humidity: 70,
        temp: 32.05,
        tempMax: 32.05,
        tempMin: 32.05,
        weather: "haze",
})

let updateInfo=(newInfo)=>{
    setweatherInfo(newInfo);
}

    return(
        <div>
            <Weather updateInfo={updateInfo}/>
            <Infobox info={weatherInfo}/>
        </div>
    );
}