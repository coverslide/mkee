var EventEmitter = require('events').EventEmitter

module.exports = function makeEventEmitter(target){
  extend(EventEmitter, target)
  EventEmitter.call(target)
}

// non-destructively extend from base class
function extend(src, target){
  Object.keys(src.prototype).forEach(function(prop){
    if(!target.prototype[prop])
      target.prototype[prop] = src.prototype[prop]
  })
}
