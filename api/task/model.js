// build your `Task` model here
const db = require("../../data/dbConfig")

function get() {
    return db("task")
}

function getById(id) {
    return db("task")
    .where({id})
    .first()
}

function add(task) {
    return db("task")
    .insert(task)
    .then(ids => {
        return getById(ids[0])
    })
}

module.exports = {
    get,
    add
}