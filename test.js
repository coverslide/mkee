var test = require('tape')
var mcgee = require('./')

function F(){}


test('basic func', function(t){
  mcgee(F)
  var f = new F

  t.notOk(f.b, 'should not exist')
  f.on('blah', function(x){this.b = x})

  f.emit('blah', 123)
  t.equal(f.b, 123, 'Should be set to 123')
  t.end()
})
