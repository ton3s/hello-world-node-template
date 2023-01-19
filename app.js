const express = require('express')
const app = express()

// Middleware
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization, Pragma, Cache-control, Expires'
	)
	next()
})
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

module.exports = app
