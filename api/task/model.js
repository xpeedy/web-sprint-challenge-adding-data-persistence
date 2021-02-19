// build your `Task` model here
const db = require("../../data/dbConfig")

function get() {
    return db("tasks")
}

function getById(id) {
    return db("tasks")
    .where("task_id",id)
    .first()
}

function add(task) {
    return db("tasks")
    .insert(task)
    .then(ids => {
        return getById(ids[0])
    })
}

module.exports = {
    get,
    add
}