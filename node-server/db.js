const mysql = require('mysql2')
const { logger } = require('./server/utils/Logger.js')
const ConnectionString = process.env.CONNECTION_STRING || 'mysql://web_admin:batman@ec2-18-237-48-233.us-west-2.compute.amazonaws.com/horizon_studios'
let connection = null

function connect() {
  connection = mysql.createConnection(ConnectionString)
  connection.on('error', (err) => {
    logger.error('[MYSQL_CONNECTION_ERROR]', err.message)
  })
  connection.on('connection', () => {
    logger.log('[MYSQL_CONNECTED]')
  })
}

async function execute(query) {
  return new Promise((resolve, reject) => {
    if (!connection) {
      return reject(new Error('Not Connection to DB'))
    }
    connection.query(query, (err, results, fields) => {
      if (err) {
        return reject(err)
      }
      return resolve(results)
    })
  })
}

module.exports = {
  connect,
  execute
}
