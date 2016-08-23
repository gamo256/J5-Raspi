var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // P1-7(GPIO4)ピンをデジタル出力に設定
  this.pinMode('P1-7', five.Pin.OUTPUT);
  // P1-7(GPIO4)ピンにHIGH(1)を出力
  this.digitalWrite('P1-7', 1);
});
