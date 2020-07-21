const router = require("express").Router();
const db = require("../models/workout");

router.post("/api/workouts", (req, res) => {
    db.create(req.body).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
    })
});


module.exports = router;