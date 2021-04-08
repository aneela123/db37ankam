const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
shoename: String,
type: String,
color: String,
price: Number
})
module.exports = mongoose.model("shoe", shoeSchema)