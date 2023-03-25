import React from 'react'

const GrantLocation = ({setCords}) => {
  
let PositionObj={
    Long:0,    
    Lat:0
} 

function grantLocationHandler()
{
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);

    } else { 
            //Toast
        }
     
    function showPosition(position) {
        
        PositionObj.Long= position.coords.longitude; 
        PositionObj.Lat= position.coords.latitude;    
       
        setCords(PositionObj);
          }
}





    return (

    <div>
        <img src="" alt="" />
        <h3>Grant Location Access</h3>
        <h2>Allow Access to get weather info</h2>
        <button onClick={grantLocationHandler} >GRANT ACCESS</button>
    </div>
  )
}

export default GrantLocation