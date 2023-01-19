const app = require('./app')
const http = require('http')

http.createServer(app).listen(8080, () => {
	console.log('OPA api server listening on port 8080')
})
