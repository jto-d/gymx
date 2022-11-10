const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require("jsonwebtoken")
app.use(express.json())
app.use(cors())

const mongoose = require('mongoose')

const mongoUrl = "mongodb+srv://jodonnell07:Riptide17@gymx.wh7o9cu.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database")
}).catch((e) => console.log(e))


app.listen(4000, () => console.log("server is up"))

require("./models/userDetails")
require("./models/workoutTracker")

const User = mongoose.model("userInfo")
const Tracker = mongoose.model("workoutTracker")

app.post("/api/tracker", async (req, res) => {
    const {workout, weight, sets, reps } = req.body
    console.log(req.body)

    try {
        await Tracker.create({
            workout,
            weight,
            sets,
            reps,
        })
        res.json({status:"ok"})
    } catch (error) {
        res.json({status: "error"})
    }

})

app.post("/api/stats", async (req,res) => {
    const { workout } = req.body;

    const tracker = await Tracker.find({
        workout
    })

    if (tracker) {
        return res.json({ status: 'ok', workouts: tracker})
    } else {
        return res.json({ status: 'error', user: false})
    }
})

app.post("/api/register", async (req,res) => {
    const { firstName, lastName, email, password } = req.body;
    console.log(req.body)
    try {
        await User.create({
            firstName,
            lastName,
            email,
            password
        })
        res.json({status:"ok"})
    } catch (error) {
        res.json({status: "error"})
    }
})

app.post("/api/login", async (req,res) => {
    const { email, password } = req.body;

    const user = await User.findOne({
        email,
        password
    })

    if (user) {
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        },
        'secretcode72'
        )
        return res.json({ status: 'ok', user: token})
    } else {
        return res.json({ status: 'error', user: false})
    }
})