var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Motorオブジェクトを作成
  var motor =new five.Motor({
    pins: {
      pwm: 'P1-12',
      dir: 'P1-16'
    },
    invertPWM: true
  });

  motor.forward(255);
});
