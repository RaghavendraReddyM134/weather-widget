import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./searchbox.css";
import {useState} from "react";
import Alert from '@mui/material/Alert';


export default function Weather({updateInfo}){
    let [city,setCity]=useState("");
    let [error,seterror]=useState(false);
    const API_URL="http://api.openweathermap.org/data/2.5/weather"
    const API_KEY="de291797cdc559e60755f77f0dd118f0"

    let getweather= async ()=>{
        try{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse=await response.json();
        // console.log(jsonResponse);
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,

        }
        console.log(result);
        return result;
    } catch(err){
        throw err;
    }
    }
let handlechange=(evt)=>{
    setCity(evt.target.value)
};

let handlesubmit=async(evt)=>{
    try{     
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo=await getweather();
        updateInfo(newInfo);

    }catch(err){
        seterror(true);
    }
    
}


return(
        <div className='weather'>
        
        <form onSubmit={handlesubmit}>
        <TextField id="city" label="cityName" variant="outlined" required value={city} onChange={handlechange}/>
        <br></br> <br></br>
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
        search
      </Button>
      {error && <Alert severity="error">No such place exist!</Alert>}
        </form>
        <br></br>
        </div>
    );
}