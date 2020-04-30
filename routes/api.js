const Workout = require("../models/Workout");
module.exports = function (app) {
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
            .sort({
                date: -1
            })
            .limit(7)
            .then(db => {
                res.json(db)
            })
            .catch(err => {
                res.status(400).json(err);
            });
    })
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
            .sort({
                date: -1
            })
            .then(db => {
                res.json(db)
            })
            .catch(err => {
                res.status(400).json(err);
            });
    })
    app.post('/api/workouts', ({ body }, res) => {
        Workout.create(body)
            .then((dbWorkout) => {
                res.json(dbWorkout)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    })
    app.put('/api/workouts/:id', ({ body, params }, res) => {
        Workout.updateOne({ _id: params.id }, { $push: { exercises: body } })
            .then((dbWorkout) => {
                res.json(dbWorkout)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    })
};