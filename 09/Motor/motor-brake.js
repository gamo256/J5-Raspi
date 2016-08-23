var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Motorオブジェクトを作成
  var motor = new five.Motor({
    pins: {
      pwm: 'P1-12',
      dir: 'P1-16',
      brake: 'P1-18'
    }
  });

  motor.forward(255);

  // 5秒後
  this.wait(5000, function() {
    // ブレーキで停止
    motor.brake();
  });

  // 10秒後
  this.wait(10000, function() {
    // ブレーキを解除
    motor.release();
  });
});
