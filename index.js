// start your server here
const server = require("./api/server")
const PORT = 5000

server.listen(PORT,() => {
    console.log(`server running on port: ${PORT}`)
})