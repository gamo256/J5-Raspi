var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // P1-7(GPIO4)をデジタル入力に設定
  this.pinMode('P1-7', five.Pin.INPUT);
  // P1-7(GPIO4)のデジタル入力値を読み取って表示
  this.digitalRead('P1-7', function(value) {
    console.log(value);
  });
});
