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
    pwmRange: [600, 2200]
  });

  // 45～135度の範囲を1000ミリ秒かけて、10ステップでスイープ
  servo.sweep({
    range: [45, 135], 
    interval: 5000,
    step: 10
  });
});
