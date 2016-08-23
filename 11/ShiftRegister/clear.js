var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // ShiftRegisterオブジェクトを作成
  var register = new five.ShiftRegister(['P1-7', 'P1-11', 'P1-13']);

  // データを送信
  register.send(0xFF);
  // 5秒後
  this.wait(5000, function(){
    // シフトレジスタをクリア
    register.clear();
  });
});