var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // ShiftRegisterオブジェクトを作成
  var register =new five.ShiftRegister({
    isAnode: true,
    pins: ['P1-7', 'P1-11', 'P1-13']
  });

  var number = 0;

  this.loop(500, function() {
    // 0〜9の数字を表示
    register.display(number++)
    if (number > 9) {
      number = 0;
    }
  });
});