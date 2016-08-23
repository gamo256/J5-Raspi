var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Servoオブジェクトを作成
  // P1-12(GPIO18/PWM0)ピンをサーボモーター制御用に設定
  var servo = new five.Servo({
    pin: 'P1-12',
    startAt: 20,
    pwmRange: [600, 2200]
  });

  // 20度に設定
  servo.home();
});
