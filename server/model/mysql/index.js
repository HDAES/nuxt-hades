
const Knex = require('knex')
const { config } = require('../../config')

const mysql = new Knex({
  client: 'mysql',
  connection: config,
  debug: true,
  log: {
    warn(message) {
    },
    error(message) {
    },
    deprecate(message) {
    },
    debug(message) {
    }
  }
})
module.exports = { mysql }
