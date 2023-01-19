const { createLogger, format, transports } = require('winston')
const { combine, timestamp, prettyPrint, printf } = format

const logger = createLogger({
	format: combine(
		timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		prettyPrint(),
		printf((info) => `${info.timestamp} [${info.level}]: ${info.message}`)
	),
	transports: [new transports.Console()],
})

module.exports = logger
