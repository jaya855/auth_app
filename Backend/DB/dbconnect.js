const mongoose = require('mongoose');

const dbconnect = async ()=>{
    try{
      await mongoose.connect('mongodb://127.0.0.1/authApp');
      console.log("db connected successfully");
    }
    catch(error){
        console.log("db connection failed");
    }
}

module.exports=dbconnect;