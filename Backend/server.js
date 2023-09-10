const port = 8000;
const dbconnect = require('./DB/dbconnect')
const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
const User = require('./DB/user');
dbconnect();
app.use(express.json());
app.listen(port, () => {
    console.log("app is running at port 8000");
})

app.post('/register',async(req,res) => {
    try{
        alert("backend reached bby")
        const {email,password,name} = req.body;
        console.log(req.body)
        let newuser =await  User.create({email,password,name} );
        res.status(201).json({message:'Registration Successful'});
    }
    catch(error){
        res.status(500).json({error:'Registration failed'});
    }
})


//login
app.post('/login', async (req, res) => {
    try {
        const { email, name, password } = req.body;
        const user = User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "user not registered" });
        }
        if (password !== user.password) {
            return res.status(401).json({ message: "enter correct password" });
        }
        res.status(200).json({ message: "user successfully logged in" })
    }
    catch (error) {
        res.status(500).json({ message: "not able to logged in" });
    }


})

