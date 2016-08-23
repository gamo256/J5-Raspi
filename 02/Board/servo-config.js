var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // P1-12(GPIO18/PWM0)ピンをサーボ出力に設定
  this.pinMode('P1-12', five.Pin.SERVO);

  // PWMの最小パルス幅を600ms、最大パルス幅を2200msに設定
  this.servoConfig('P1-12', 600, 2200);

  // 180度回転させる値を出力
  this.servoWrite('P1-12', 180);
});
