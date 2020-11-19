//Import Models and Express
const db = require("../models");

module.exports = (app) => {

    //Returning all previous workouts
    app.get("/api/workouts", (req, res) => {
        db.Exercise.find({})
            .then((workout) => {
                res.json(workout);
            })
            .catch(err => res.json(err))
    });

    //Creating new exercise in new workout
    app.post("/api/workouts", (req, res) => {
        db.Exercise.create({}).then((newWorkout) => {
                res.json(newWorkout);
            })
            .catch(err => res.json(err))
    });

    //Adding exercise to previous workout
    app.put("/api/workouts/:id", ({ params, body }, res) => {
        db.Exercise.findByIdAndUpdate({ _id: params.id }, { $push: { exercises: body } }).then((updatedWorkout) => {
                res.json(updatedWorkout)
            })
            .catch(err => res.json(err))
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Exercise.find({}).then(workout => res.json(workout))
            .catch(err => res.json(err))
    })


    //Updating workout
    app.post("/api/workouts/range", (req, res) => {
        db.Exercise.create({})
            .then((data) => res.json((data)))
            .catch(err => res.json(err))
    });

};