var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Keypad�I�u�W�F�N�g���쐬
  var keypad = new five.Keypad({
    controller: "MPR121_KEYPAD",
    holdtime: 1000
  });

  // �L�[���z�[���h���ꂽ
  keypad.on("hold", function() {
    // ���b�Z�[�W�\��
    console.log( "Button hold");
  });
});
