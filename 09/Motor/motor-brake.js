var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Motor�I�u�W�F�N�g���쐬
  var motor = new five.Motor({
    pins: {
      pwm: 'P1-12',
      dir: 'P1-16',
      brake: 'P1-18'
    }
  });

  motor.forward(255);

  // 5�b��
  this.wait(5000, function() {
    // �u���[�L�Œ�~
    motor.brake();
  });

  // 10�b��
  this.wait(10000, function() {
    // �u���[�L������
    motor.release();
  });
});
