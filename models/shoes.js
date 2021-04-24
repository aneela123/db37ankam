const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
shoename: {
    type:String,
    required:[true,"Shoe name is mandatory"]
},
type:  {
    type:String,
    required:[true,"Shoe name is mandatory"]
},
color:  {
    type:String,
    required:[true,"Shoe name is mandatory"]
},
price: {
    type: Number,
    required: [true,"Price of the fish is required"],
    min:[1000,"Price Should be minimum of 1000$ "],
    max:[5000,"Price Cannot be greater than 5000$ "]

}
})
module.exports = mongoose.model("shoe", shoeSchema)