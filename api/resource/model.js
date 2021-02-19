// build your `Resource` model here
const db = require("../../data/dbConfig")

function get() {
    return db("resources")
}

function getById(id) {
    return db("resources")
    .where("resource_id",id)
    .first()
}

function add(resource) {
    return db("resources")
    .insert(resource)
    .then(ids => {
        return getById(ids[0])
    })
}

module.exports = {
    get,
    add
}