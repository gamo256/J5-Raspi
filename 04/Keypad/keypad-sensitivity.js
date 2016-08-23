var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Keypad�I�u�W�F�N�g���쐬
  var keypad = new five.Keypad({
    controller: "MPR121_KEYPAD",
    sensitivity: {
      press: 0.10,
      release: 0.05,
    },
  });

  // �L�[�������ꂽ��
  keypad.on("press", function(event) {
    // �L�[�̒l��\��
    console.log("Which button?", event.which);
  });
});
