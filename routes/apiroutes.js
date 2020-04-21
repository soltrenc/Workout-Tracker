var router = require("express").Router();

router.put("/api/workouts/:id", (req, res) => {
    console.log("put");
    console.log(req.body);
    console.log(req.params);
})

router.post("/api/workouts", (req, res) => {
    console.log("post test");
    console.log(req.body);
    console.log(req.params);
})

module.exports = router;