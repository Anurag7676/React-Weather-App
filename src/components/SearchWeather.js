import React from 'react'
import { useState,useEffect } from 'react';
const SearchWeather = ({getCityData}) => {

  const [city, setcity] = useState("");

  useEffect(() => {

  }, [city]);


  function handleInputChange(event) {
    setcity(event.target.value);
  }

  function searchHandler(event)
  {
      event.preventDefault();
      getCityData(city);
  }



  return (
    <div>
    
        <input type="text" onChange={handleInputChange} id='search-input' placeholder='Search for city...' />
        <button onClick={searchHandler} >searchicon</button>
        
    </div>
  )
}

export default SearchWeather