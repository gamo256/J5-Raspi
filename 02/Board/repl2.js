var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Ledオブジェクトを作成
  var led = new five.Led('P1-7');

  this.repl.inject({
    // LEDをオン/オフするメソッドを登録
    on: function() {
      led.on();
    },
    off: function() {
      led.off();
    }
  });
});
