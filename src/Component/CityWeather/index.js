import React from 'react';

const CityWeather =(props) => {
    console.log("The  ",props);
    console.log("The cloud ",props.cityWeather.main);
    if(props.cityWeather.base)
    {
        return (
            <div>
    
             <ul>
                <li> City Name-&nbsp;&nbsp;{props.cityWeather.name} </li>
                <li> Temperature-&nbsp;&nbsp;{props.cityWeather.main.temp-273}C</li>
                <li> Humidity-&nbsp;&nbsp;{props.cityWeather.main.humidity}</li>
        
             </ul>
            </div>
        )
    }
    else{
        return(<div></div>);
    }

    
};

export default CityWeather;