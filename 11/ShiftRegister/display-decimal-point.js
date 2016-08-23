var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // ShiftRegister�I�u�W�F�N�g���쐬
  var register = new five.ShiftRegister(['P1-7', 'P1-11', 'P1-13']);

  var number = 0;

  this.loop(500, function() {
    // �����_�t��0�`9�̐�����\��
    register.display((number++) + ".")
    if (number > 9) {
      number = 0;
    }
  });
});