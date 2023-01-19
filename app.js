const express = require('express')
const axios = require('axios')
const app = express()
const logger = require('./logger')

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

// Policies
app.get('/v1/policies', async (req, res) => {
	const response = await axios.get('http://localhost:8181/v1/policies')
	const policies = response.data.result
	logger.info(`GET v1/policies - ${policies.length} policies`)
	res.send(response.data.result)
})

module.exports = app
