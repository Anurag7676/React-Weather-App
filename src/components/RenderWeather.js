import React from 'react'

const RenderWeather = (props) => {

    let weatherInfo= props.Data;
    let cityName=props.Data?.name;
    console.log('i am name',props.Data)
    
    let nationalFlag=`https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    let decs=weatherInfo?.weather?.[0]?.description;
    let weatherIcon=`https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;

    let temp=`${weatherInfo?.main?.temp} °C`;
    let windSpeed=`${weatherInfo?.wind?.speed} m/s`;
    let humidity=`${weatherInfo?.main?.humidity} %`;
    let cloud=`${weatherInfo?.clouds?.all} %`;

  
    return (
    <div>
        <h2>{cityName}<span><img src={nationalFlag} alt="" /></span></h2>
        {/* sky */}
        <div>
        <h2>{decs}</h2>
        <img src={weatherIcon} alt="" />
        </div>

        <h3>{temp}</h3>
        
        {/* cards */}
        <div>
            <div>
                <img src="" alt="" />
                <h3>Wind Speed</h3>
                <h3>{windSpeed}</h3>
            </div>
            <div>
                <img src="" alt="" />
                <h3>Humidity</h3>
                <h3>{humidity}</h3>
            </div>
            <div>
                <img src="" alt="" />
                <h3>Cloud</h3>
                <h3>{cloud}</h3>
            </div>
        </div>
    </div>
  )
}

export default RenderWeather