// build your `Project` model here
const db = require("../../data/dbConfig")

function get() {
    return db("project")
}

function getById(id) {
    return db("project")
    .where({id})
    .first()
}

function add(project) {
    return db("project")
    .insert(project)
    .then(ids => {
        return getById(ids[0])
    })
}


module.exports = {
    get,
    add
}