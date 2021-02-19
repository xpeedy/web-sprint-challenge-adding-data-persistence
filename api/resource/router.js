// build your `/api/resources` router here
const express = require("express")
const db = require("../../data/dbConfig")
const router = express.Router()
const Resource = require("./model")


router.get("/", (req, res) => {
    db("resource")
})

router.post("/", (req, res) => {
    db("resource")
})

module.exports = router;