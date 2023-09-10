import React from 'react'

const About = () => {
  
    const mystyle = {
      color: "white",
      // backgroundColor: "DodgerBlue",
      backgroundColor : "#E57C23",
      display:"flex",
      fontFamily: "Arial",
      alignItems: "center",
      height: "586px",
      justifyContent : "center",
      fontSize:"60px"
    };
  
   return (
    <div style={mystyle}>
      Hello !! This is your About page
    </div>
  )
}

export default About
