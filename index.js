const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const wrapAsync = require("./views/others/wrapAsync.js");
const ejsMate = require("ejs-mate");
const User = require("./models/userNumber.js");
const app = express();

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.engine('ejs', ejsMate);

// ##  MONGOOSE  ##
main().then(() => console.log('Connection successful')).catch( (e) =>{
    console.log(e);
    console.log(e.name);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/4U");
}


const port = 8080;
app.listen(port,()=>{
    console.log(`App is listening for 4U on port ${port}`);
})


//  ## INDEX.JS 
app.get("/4U",(req,res)=>{
    res.render("app.ejs");
})


app.post("/4U/login-data",wrapAsync (async(req,res)=>{
    let {mobileNumber} =req.body;
    let user = new User({
        mobileNumber:mobileNumber,
    })
    await user.save().then((res)=> console.log(res));
    res.redirect("/4U");
}));

app.get("/ac",(req,res)=>{
    // console.log("We are at AC & appliance services page");
    res.render("services/ac.ejs");
})

app.get("/fridge",(req,res)=>{
    res.render("services/fridge.ejs");
})

app.get("/washingMachine",(req,res)=>{
    res.render("services/washingMachine.ejs");
})

app.get("/electrician",(req,res)=>{
    res.render("services/electrician.ejs");
})

app.get("/plumber",(req,res)=>{
    res.render("services/plumber.ejs");
})

app.get("/carpenter",(req,res)=>{
    res.render("services/carpenter.ejs");
})



 

app.get("*",(req,res)=>{
    res.render("others/wrongPath.ejs");
})




//  ## MIDDLEWARES 
app.use((err,req,res,next)=>{
   let{status=500,message= "Page not found"} = err;
   console.log("#####################################################",err.message);
   res.status(status).render("others/error.ejs",{message});

//    return next(err);
})



// app.use((err,req,res,next)=>{
//     if(err.name === "ValidationError"){
//         err = handleValidationError(err,res);
//     }
//     console.log(err.message);
//     res.render("others/error.ejs");
// })

// const handleValidationError = (err,res)=> {
//     console.log("Validation error occured");
//     console.log("ERROR name: ",err.name);
//     res.redirect("/alert");
// }

 

