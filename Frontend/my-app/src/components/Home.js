import React from 'react'

const Home = () => {
  const mystyle = {
    color: "white",
    // backgroundColor: "#FFB699",
    backgroundColor: "#102C57",
    display:"flex",
    fontFamily: "Arial",
    alignItems: "center",
    height: "586px",
    justifyContent : "center",
    fontSize:"60px"
  };
  return (

    <div style={mystyle}>
      Hello !! This is your Home page
    </div>
  )
}

export default Home
