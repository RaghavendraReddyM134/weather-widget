import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infobox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function Infobox({info}){
    let init_url="https://images.unsplash.com/photo-1545134969-8debd725b007?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let cold_url="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let hot_url="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let rain_url="https://images.unsplash.com/photo-1630574232726-fc3ea90637b8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return(
        <div className="Infobox">
        <div className="cardcontainer">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rain_url:info.temp?hot_url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
          {info.city}{
            info.humidity >80?(<ThunderstormIcon/>):info.temp?(<WbSunnyIcon/>):(<AcUnitIcon/>)
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temp:-{info.temp}&deg;C</p>
         <p>Humidity:-{info.humidity}</p>
         
         <p>MaxTemp:-{info.tempMax}</p>
       
         <p>MinTemp:-{info.tempMin}</p>
         <p>The weather can be described as <i>{info.weather} </i>and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>

        </div>
    );
}