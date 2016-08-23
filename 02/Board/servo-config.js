var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // P1-12(GPIO18/PWM0)�s�����T�[�{�o�͂ɐݒ�
  this.pinMode('P1-12', five.Pin.SERVO);

  // PWM�̍ŏ��p���X����600ms�A�ő�p���X����2200ms�ɐݒ�
  this.servoConfig('P1-12', 600, 2200);

  // 180�x��]������l���o��
  this.servoWrite('P1-12', 180);
});
