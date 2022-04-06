const mysql = require('mysql2')
const { logger } = require('./server/utils/Logger.js')
const ConnectionString = process.env.CONNECTION_STRING

let connected = false
function connect() {
  const connection = mysql.createConnection(ConnectionString)
  connected = true
  connection.once('error', (err) => {
    logger.error('[MYSQL_CONNECTION_ERROR]', err.message)
  })
  setTimeout(() => {
    closeConnection(connection)
  }, 20000)
  return connection
}

function closeConnection(connection) {
  try {
    if (connected) {
      connection.end()
      connected = false
    }
  } catch (error) {
    logger.error('[ERROR_CLOSING_DB_CONNECTION]', error)
  }
}

async function execute(query) {
  return new Promise((resolve, reject) => {
    const connection = connect()
    if (!connection) {
      return reject(new Error('Not Connection to DB'))
    }
    connection.execute(query, (err, results, fields) => {
      try {
        if (err) {
          return reject(err)
        }
        return resolve(results)
      } catch (error) {
        logger.error('[ERROR_IN_DB_EXECUTION]', { query }, { error })
        reject(error)
      } finally {
        closeConnection(connection)
      }
    })
  })
}

module.exports = {
  execute
}
