//Import Mongo

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Enter exercise type"
        },
        name: {
            type: String,
            trim: true,
            required: "Exercise Name"
        },
        duration: {
            type: Number,
            required: "Duration(minutes) of Exercise"
        },
        //Exercise dependent(not required for all exercises)
        distance: {
            type: Number
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number,
        }

    }]
});

//Export Model

const Exercise = mongoose.model("exercise", ExerciseSchema);
module.exports = Exercise;