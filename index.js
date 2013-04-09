var EventEmitter = require('events').EventEmitter
var inherits = require('util').inherits

module.exports = function makeEventEmitter(ctr){
  inherits(ctr, EventEmitter)
}
