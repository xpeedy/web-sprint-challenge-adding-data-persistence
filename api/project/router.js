// build your `/api/projects` router here
const express = require("express")
const db = require("../../data/dbConfig")
const router = express.Router()
const Project = require("./model")

router.get("/", (req, res) => {
    db("projects")
})

router.post("/", (req, res) => {
    db("projects")
})

module.exports = router;