const express=require("express");
const User=require("./models/user");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const {createWebToken}=require("./auth/auth");
const saltRounds=10;
const app=express();
const path=require("path");

app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", 'hbs');

app.get("/", (req, res)=>{
    res.render(("home"));
});

app.get("/signup", (req, res)=>{
    res.render(signup);
})

app.get("/login", (req, res)=>{
    res.render(login);
})

app.post("/signup", async (req, res)=>{
    const {email, password}=req.body;

    let hashPassword=await bcrypt.hash(password, saltRounds);

    let newUser=new User({email, password: hashPassword});
    await newUser.save();

    res.json(newUser);
});

app.post("/login", async(req, res)=>{
    const {email, password}=req.body;

    let user=await User.findOne({email});
    if(!user){
        return res.send("No User Found!!");
    }
    await bcrypt.compare(password, user.password).then(function(result){
        if(result){
            let token=createWebToken(user.toJSON());
            res.json(token);
        }
    })
})

mongoose.connect("mongodb://127.0.0.1:27017/g26jwt").then(()=>{
    app.listen(3000, console.log("Server Started"));
})