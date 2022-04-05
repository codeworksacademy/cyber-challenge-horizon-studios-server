const mysql = require('mysql2')
const { logger } = require('./server/utils/Logger.js')
const ConnectionString = process.env.CONNECTION_STRING || 'mysql://web_admin:batman@ec2-18-237-48-233.us-west-2.compute.amazonaws.com/horizon_studios'
function connect() {
  const connection = mysql.createConnection(ConnectionString)
  connection.on('error', (err) => {
    logger.error('[MYSQL_CONNECTION_ERROR]', err.message)
  })
  setTimeout(() => {
    try {
      connection.end()
    } catch (error) {
      logger.error('[ERROR_CLOSING_DB_CONNECTION]', error)
    }
  }, 20000)
  return connection
}

async function execute(query) {
  return new Promise((resolve, reject) => {
    const connection = connect()
    if (!connection) {
      return reject(new Error('Not Connection to DB'))
    }
    connection.query(query, (err, results, fields) => {
      try {
        connection.end()
        if (err) {
          return reject(err)
        }
        return resolve(results)
      } catch (error) {
        logger.error('[ERROR_IN_DB_EXECUTION]', { query }, { error })
        reject(error)
      }
    })
  })
}

module.exports = {
  execute
}
