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

  // Sensor�I�u�W�F�N�g���쐬
  // PCF8591��A3(AIN3)�s�����Z���T�[���͂ɐݒ�
  var sensor = new five.Sensor({
                 pin: "A3",
                 board: virtual
               });

  // �f�[�^��50�`150�͈͓��Ȃ烁�b�Z�[�W��\��
  sensor.within([50, 150], function() {
    console.log("In a range");
  });
});