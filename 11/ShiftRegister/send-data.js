var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // ShiftRegister�I�u�W�F�N�g���쐬
  var register = new five.ShiftRegister(['P1-7', 'P1-11', 'P1-13']);

  // �_�~�[���M
  register.send(0xFF);

  // �f�[�^���M
  register.send(0x11);

});