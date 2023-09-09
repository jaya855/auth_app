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

//registration

// app.post('/register', async (req, res) => {
//     console.log("backend tk pauch gya")
//     try {
//         const { email, name, password } = req.body;
//         console.log(req.body);

        // if (User.findOne({ email })) {
        //     res.status(409).json({
        //         success: false,
        //         error: "user already registered"
        //     });
        // }
//         console.log("1");
//  let data=req.body
//         let newuser =await  User.create(data);
//         console.log("2");
//         // await newuser.save();
//         console.log("3");
//         res.json({
       
//             success: true,
//             message: "user registration done successful"
//         });
//         console.log("4");
//     }
//     catch (error) {
//         console.log("5")
//         console.log(error.message)
//         res.status(500).json({
            
//             success: false,
//             error: "user registration failed due to some interal server issues"
//         });
//     }
// })

app.post('/register',async(req,res) => {
    try{
        const {email,password,name} = req.body;
        console.log(req.body)
        const user = new User({email,password,name});
        await user.save();
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
            res.status(401).json({ error: "user not registered" });
        }
        if (password !== user.password) {
            res.status(401).json({ error: "enter correct password" });
        }
        res.status(200).json({ message: "user successfully logged in" })
    }
    catch (error) {
        res.status(500).json({ error: "not able to logged in" });
    }


})

