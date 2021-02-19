// build your `/api/projects` router here
const express = require("express")
const router = express.Router()
const Project = require("./model")

router.get("/", (req, res) => {
    Project.get().then(projects => {
        projects ?
        res.status(200).json(projects) :
        res.status(404).json({message:"not found"})
    })
})

router.post("/", (req, res) => {
    Project.add(req.body).then(project => {
        req.body ?
        res.status(201).json(req.body) :
        res.status(400).json({message:"cant add project"})
    })
})

module.exports = router;