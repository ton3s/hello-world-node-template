const app = require('./app')
const http = require('http')
const logger = require('./logger')

// Start server
http.createServer(app).listen(8080, () => {
	logger.info('OPA api server listening on port 8080')
})
