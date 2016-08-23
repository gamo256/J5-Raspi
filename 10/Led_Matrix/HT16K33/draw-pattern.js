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

  // �����p�^�[�����쐬
  var heart = [
    "01100110",
    "10011001",
    "10000001",
    "10000001",
    "01000010",
    "00100100",
    "00011000",
    "00000000"
  ];

  // �����p�^�[����\��
  matrix.draw(heart);
});
