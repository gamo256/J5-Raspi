var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Motors�I�u�W�F�N�g(Motor�I�u�W�F�N�g�̃R���N�V����)���쐬
  var motors =new five.Motors([
    {pins: { pwm: 'P1-32', dir: 'P1-36'}},
    {pins: { pwm: 'P1-33', dir: 'P1-29'}}
  ]);

  // �C���f�b�N�X�u0�v(3�s��)�̃��[�^�[�𐳓]
  motors[0].forward(255);
});
