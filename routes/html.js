const path = require('path'); 

module.exports = function (app) {
    app.get("/", (req,res) => {
        res.sendFile('public/index.html', {
            root: process.cwd()
        })
    })
    app.get("/exercise", (req,res) => {
        res.sendFile('public/exercise.html', {
            root: process.cwd()
        })
    })
    app.get("/stats", (req,res) => {
        res.sendFile('public/stats.html', {
            root: process.cwd()
        })
    })
};