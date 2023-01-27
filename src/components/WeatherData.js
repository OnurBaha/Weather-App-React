import React from "react";
import "../styles/main.css";

const WeatherData = ({day,index}) => {
  console.log("DAAAAAAY",day);  
      return ( 
      <div className="day" key={index}>
        <p><span className="date"> {day.day}</span></p>
        <p>Temp:<span className="data"> {day.temp}º</span></p>
        <p>Humidity:<span className="data"> {day.humidity}</span></p>
        <p>Desc: <span className="data">{day.desc}</span></p>
      </div>
      )
};

export default WeatherData;