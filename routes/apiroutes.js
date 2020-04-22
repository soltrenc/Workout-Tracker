var router = require("express").Router();
const db = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    db.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});


router.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;
    db.findByIdAndUpdate(id, { $push: { exercises: req.body } })
        .then(workoutData => res.json(workoutData))
        .catch((err) => {
            console.log("err", err);
            res.json(err);
        });
});


router.post("/api/workouts", (req, res) => {
    console.log("post test");
    console.log(req.body);
    console.log(req.params);
})

module.exports = router;