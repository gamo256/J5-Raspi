var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  this.repl.inject({
    // LedオブジェクトをREPLに登録
    led: new five.Led('P1-7')
  });  
});
