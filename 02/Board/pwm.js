var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // P1-12(GPIO18/PWM0)ピンをアナログ出力(PWM出力)に設定
  this.pinMode('P1-12', five.Pin.PWM);
  // P1-12(GPIO18/PWM0)ピンにアナログ値255を出力
  this.analogWrite('P1-12', 255);
});
