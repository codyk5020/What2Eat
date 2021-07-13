// STEP 1
const express = require('express') // Import express which allows easily create a HTTP server in Node.js
const app = express() // Create an express instance and initialise the http server
const http = require('http').createServer(app)
const io = require('socket.io')(http) // Start socket.io which allows us to connect to our frontend using websockets

const events = require('events')
const timeUpEvent = new events.EventEmitter()

// STEP 2
io.on('connection', (socket) => {
    console.log("A user connected!")
}) // Print whenever a user connects

app.use(express.static('public'))
http.listen(3000, () => {
    console.log('listening on *:3000')
})

// STEP 3

// STEP 4
