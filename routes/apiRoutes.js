const router = require("express").Router();
const db = require("../models");


router.get("/workouts", (req, res) => {
    db.Workout.find({}).then(data => {

        //this is a workaround for virtual property used in workout model
        // const lastExercise = data[data.length - 1].toJSON();
        // lastExercise.totalDuration = lastExercise.exercises.reduce((total, exercise) => {
        //     return total + exercise.duration;
        // }, 0)
        // lastExercise.totalDistance = lastExercise.exercises.reduce((total, exercise) => {
        //     return total + exercise.distance;
        // }, 0)
        // data[data.length - 1] = lastExercise;
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

router.post("/workouts", (req, res) => {
    console.log(req.body)
    db.Workout.create(req.body).then(data => {
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            if (err) {
                res.status(500).json(err);
            }
        });
});

router.put("/workouts/:id", (req, res) => {
    db.Workout.update(
        { _id: req.params.id },
        {
            $push: {
                exercises: req.body
            }
        }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router;