const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
    },
    weight: {
        type: Number,
        required: "Enter weight"
    },
    sets: {
        type: Number,
        required: "Enter sets"
    },
    reps: {
        type: Number,
        required: "Enter reps"
    },
    duration: {
        type: Number,
        required: "Enter duration of workout"
    },
    distance: {
        type: Number,
        required: "Enter duration of workout"
    }
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;