import React from 'react'

const Dashboard = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "rgb(2, 13, 25)",
    display:"flex",
    fontFamily: "Arial",
    alignItems: "center",
    height: "586px",
    justifyContent : "center",
    fontSize:"60px"
  };
  return (
    <div style={mystyle}>
      Welcome to your Dashboard !!
    </div>
  )
}

export default Dashboard
