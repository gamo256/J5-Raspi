var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // P1-12(GPIO18/PWM0)�s�����T�[�{�o�͂ɐݒ�
  this.pinMode('P1-12', five.Pin.SERVO);

  // 90�x�̈ʒu�ɉ�]������l���o��
  this.servoWrite('P1-12', 90);
});
