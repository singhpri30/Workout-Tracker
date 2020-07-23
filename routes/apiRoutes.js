const router = require("express").Router();
const db = require("../models/workout");


router.get("/workouts", (req, res) => {
    db.find({}).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

router.post("/workouts", (req, res) => {
    db.create(req.body).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});

// router.put("/api/workouts/:id", (req, res) => {
//     db.update(req.params.id).then(data => {
//         console.log(data);
//         res.json(data);
//     }).catch(err => {
//         res.status(400).json(err);
//     })
// });

module.exports = router;