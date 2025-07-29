const { default: mongoose } = require("mongoose");



const restaurentModel = new mongoose.Schema({
    name : String,
    address : String,
    img_path : String
});

export const restaurentSchema = mongoose.models.restaurents || mongoose.model("restaurents",restaurentModel)