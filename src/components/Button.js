import React from 'react'

const Button = ({tabHandler}) => {

  function myLocationHandler()
  {
    tabHandler(true);
  }
  function searchButton()
  {
    tabHandler(false);
  }

  return (
    <div>
        <button onClick={myLocationHandler} >Your Location</button>
        <button onClick={searchButton}>Search</button>
    </div>
  )
}

export default Button