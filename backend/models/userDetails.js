const mongoose = require("mongoose")


const userDetailsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
},
{
    collection: "userInfo"
}
)

mongoose.model("userInfo", userDetailsSchema)

