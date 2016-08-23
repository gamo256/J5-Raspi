var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  var state = 0;

  this.pinMode('P1-7', five.Pin.OUTPUT);

  // 500ミリ秒間隔で処理(LEDの点灯/消灯)を繰り返す
  this.loop(500, function() {
    board.digitalWrite('P1-7', (state ^= 1));
  });
});