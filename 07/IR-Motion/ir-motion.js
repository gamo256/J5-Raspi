var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Motion�I�u�W�F�N�g���쐬
  // P1-16(GPIO23) �s�������[�V�����Z���T�[�̌��o�p�ɐݒ�
  var motion = new five.Motion('P1-16');

  // �ucalibrated�v�C�x���g: ���[�V�����Z���T�[�̍Z���������ɔ���
  motion.on("calibrated", function() {
    console.log("calibrated", Date.now());
  });

  // �umotionstart�v�C�x���g:���������o�����Ƃ��ɔ���
  motion.on("motionstart", function() {
    console.log("motionstart", Date.now());
  });

  // �umotionend�v�C�x���g:��������~�����Ƃ��ɔ���
  motion.on("motionend", function() {
    console.log("motionend", Date.now());
  });
});