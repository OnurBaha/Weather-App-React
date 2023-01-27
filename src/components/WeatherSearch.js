import "../styles/main.css"
import React,{useContext} from "react"
import Context from "../context/Context"
import cityData from "../data/cityData";

const WeatherSearch = ()=>{
    const {api_call, city}=useContext(Context);
    
     const handleChange=(e)=>{
        api_call(e,e.target.value);
        console.log(city);
     } 
    return (
        <form className="home" >
            <h1 className='title animate__animated animate__bounce'>Weather App</h1>
            <div className="container">
                <div className="row">
                    <div className=" search-box col-lg-12 mt-3" value={city} onChange={handleChange} >
                        <select name="name" id='city' className='dropdown col-lg-10 col-md-10 col-sm-12' >
                            <option className='shadow-sm p-3 mb-5 bg-body rounded'>Şehir seçiniz</option>
                            {
                                cityData.map((cityItem)=>{
                                return(
                                    <option key={cityItem.id} className='shadow-sm p-3 mb-5 bg-body rounded' placeholder="Select a city">
                                    {cityItem.name}</option>
                                )})
                            }   
                        </select>
                    </div>  
                </div>
            </div>
        </form>
      )
}
 


export default WeatherSearch