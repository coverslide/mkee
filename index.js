var EventEmitter = require('events').EventEmitter
var inherits = require('util').inherits

module.exports = makeEventEmitter

makeEventEmitter.EventEmitter = EventEmitter

function makeEventEmitter(target){
  inherits(target, EventEmitter)
  return target
}
