const express = require('express')
const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors)

const mongoose = require('mongoose')

const mongoUrl = "mongodb+srv://jodonnell07:Riptide17@gymx.wh7o9cu.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database")
}).catch((e) => console.log(e))


app.listen(4000, () => console.log("server is up"))

require("./models/userDetails")

const user = mongoose.model("userInfo")

app.post("/register", async(req,res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        await user.create({
            firstName,
            lastName,
            email,
            password
        })
        res.send({status:"ok"})
    } catch (error) {
        res.send({status: "error"})
    }
})