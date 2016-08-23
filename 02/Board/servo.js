var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // P1-12(GPIO18/PWM0)ピンをサーボ出力に設定
  this.pinMode('P1-12', five.Pin.SERVO);

  // 90度の位置に回転させる値を出力
  this.servoWrite('P1-12', 90);
});
