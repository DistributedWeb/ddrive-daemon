const pino = require('pino')
const argv = require('minimist')(process.argv.slice(2))

module.exports = pino({
  name: 'ddrive',
  level: argv['log-level'] || 'info',
  enabled: true
}, pino.destination(2))
