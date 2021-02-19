// build your `/api/tasks` router here
const express = require("express")
const db = require("../../data/dbConfig")
const router = express.Router()
const Task = require("./model")



router.get("/", (req, res) => {
    db("task")
})

router.post("/", (req, res) => {
    db("task")
})

module.exports = router;