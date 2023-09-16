
const dbconnect = require('./DB/dbconnect')
const express = require('express');
const dotenv=require('dotenv');
const app = express();
const User = require('./DB/user');
const cors = require('cors')
dotenv.config();

app.use(cors());

dbconnect();
app.use(express.json());
const port=process.env.port || 4000;
app.listen(port, () => {
    console.log(`app is running at port ${port}`);
})



app.post('/register',async(req,res) => {
console.log("backend tk pauch gya 2")
    try {
        const { email, name, password } = req.body;
        console.log(req.body);
        let check=false;
        let existingdata=await User.findOne({ email })
        if (existingdata) {
            check=true;
            console.log("inside bro")
            return res.status(409).json({
                success: false,
                message: "user already registered"

            });

        }
        console.log("back bro")

        if(check==false) 
        console.log("1");
 let data=req.body
        let newuser =await  User.create(data);
        console.log("2");
        // await newuser.save();
        console.log("3");
        // res.status().json({
       res.status(201).json({
            success: true,
            message: "user registration done successful"
        });
        console.log("4");
    }
    catch (error) {
        console.log("5")
        console.log(error.message)
        res.status(500).json({
            
            success: false,
            message: "user registration failed due to some interal server issues"
        });
    }
})


//login
app.post('/login', async (req, res) => {
    try {
        const { email,password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success : false,message: "user not registered"});
        }
        if (password !== user.password) {
            return res.status(401).json({ success : false, message: "enter correct password" });
        }
        res.status(200).json({success : true,  message: "user successfully logged in" , userDetails :{email} })
    }
    catch (error) {
        res.status(500).json({success : false,  message: "not able to logged in" });
    }


})

