var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // P1-7(GPIO4)ピンをデジタル入力に設定
  this.pinMode('P1-7', 0);
});
