// build your `/api/resources` router here
const express = require("express")
const router = express.Router()
const Resource = require("./model")


router.get("/", (req, res) => {
    Resource.get().then(resources => {
        resources ?
        res.status(200).json(resources) :
        res.status(404).json({message:"not found"})
    })
})

router.post("/", (req, res) => {
    Resource.add(req.body).then(resource => {
        resource ?
        res.status(201).json(resource) :
        res.status(400).json({message: "cant add resource"})
    })
})

module.exports = router;