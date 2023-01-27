import React, { useContext } from "react";
import Context from "../context/Context";
import "../styles/main.css";
import WeatherData from "./WeatherData";

const Footer = () => {
  const {list} = useContext(Context);
  console.log("footer",list)

    return (
    <div className="container">
      <div className="footer">
        {
          list.map((item,index)=>{
            console.log("item,index",item,index)
            return (
              <WeatherData key={index} day={item} />
            )
           })
        }
    </div>
  </div>
  );
};

export default Footer;