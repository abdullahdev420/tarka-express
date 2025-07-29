const { default: mongoose } = require("mongoose");



const UserModel = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    mobile : Number,
    address : String
})

export const UserSchema = mongoose.models.users || mongoose.model("users",UserModel)