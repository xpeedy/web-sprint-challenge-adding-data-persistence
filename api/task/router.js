// build your `/api/tasks` router here
const express = require("express")
const db = require("../../data/dbConfig")
const router = express.Router()
const Task = require("./model")



router.get("/", (req, res) => {
    Task.get().then(tasks => {
        tasks ?
        res.status(200).json(tasks) :
        res.status(404).json({message:"not found"})
    })
})

router.post("/", (req, res) => {
    Task.add(req.body).then(task => {
        task ?
        res.status(201).json(task) :
        res.status(400).json({message:"can't add task"})
    })
})

module.exports = router;