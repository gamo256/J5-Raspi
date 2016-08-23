var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Matrix�I�u�W�F�N�g���쐬
  var matrix = new five.Led.Matrix({
    controller: "HT16K33",
    isBicolor: true
  });

  // �f�o�C�X1��2�s3��ڂ̃h�b�g�����F�œ_��
  matrix.led(0, 1, 2, LedControl.COLORS.YELLOW);
});
