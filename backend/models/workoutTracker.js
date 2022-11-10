const mongoose = require("mongoose")


const workoutTrackerSchema = new mongoose.Schema({
    workout: String,
    weight: String,
    sets: String,
    reps: String,
},
{
    collection: "workoutTracker"
}
)

mongoose.model("workoutTracker", workoutTrackerSchema)

