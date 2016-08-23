var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Matrix�I�u�W�F�N�g���쐬
  var matrix = new five.Led.Matrix({
    controller: "HT16K33"
  });

  // ������\��
  matrix.draw("G");

  // �f�o�C�X0�̖��邳(�P�x)��50%�ɐݒ�
  matrix.brightness(0, 50);
});
