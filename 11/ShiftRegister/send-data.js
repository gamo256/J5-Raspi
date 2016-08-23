var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // ShiftRegisterオブジェクトを作成
  var register = new five.ShiftRegister(['P1-7', 'P1-11', 'P1-13']);

  // ダミー送信
  register.send(0xFF);

  // データ送信
  register.send(0x11);

});