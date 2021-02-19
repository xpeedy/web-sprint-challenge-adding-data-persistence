// build your `Resource` model here
const db = require("../../data/dbConfig")

function get() {
    return db("resource")
}

function getById(id) {
    return db("resource")
    .where({id})
    .first()
}

function add(resource) {
    return db("resource")
    .insert(resource)
    .then(ids => {
        return getById(ids[0])
    })
}

module.exports = {
    get,
    add
}