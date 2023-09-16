const mongoose = require('mongoose');

const dbconnect = async ()=>{
    try{
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("db connected successfully");
    }
    catch(error){
        console.log("db connection failed");
    }
}

module.exports=dbconnect;