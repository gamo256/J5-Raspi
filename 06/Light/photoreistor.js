var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // �uPCF8591�v���g�p���邽�߂̉��z�{�[�h���쐬
  var virtual = new five.Board.Virtual(
    new five.Expander("PCF8591")
  );

  // Light�I�u�W�F�N�g���쐬
  // PCF8591��A0(AIN2)�s�����Z���T�[���͂ɐݒ�
  var light = new five.Light({
    pin: "A0",
    board: virtual
  });

  // �f�[�^���擾
  light.on("data", function() {
    console.log(this.level);
  });
});