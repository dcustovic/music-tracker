const winston = require('winston');
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ]
});

logger.info('What rolls down stairs');
logger.info('alone or in pairs,');
logger.info('and over your neighbors dog?');
logger.warn('Whats great for a snack,');
logger.info('And fits on your back?');
logger.error('Its log, log, log');

/*
const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info => `[${info.timestamp}] | ${info.level} | ${info.message}`)
        ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: '../server/src/logs/log-api.log'
        }),
        new transports.Console({
            level: 'info',
        })
    ]
})
*/
