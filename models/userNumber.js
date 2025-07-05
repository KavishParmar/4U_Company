const mongoose = require("mongoose");




const userSchema = new mongoose.Schema({
    mobileNumber:{ type :String, required:true ,minLength:10,maxLength:10},
})
const User = mongoose.model("User",userSchema);

module.exports = User;