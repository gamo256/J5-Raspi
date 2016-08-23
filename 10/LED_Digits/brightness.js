var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Digitsオブジェクトを作成
  var digits = new five.Led.Digits({
    pins: {
      data: 'P1-7',
      clock: 'P1-11',
      cs: 'P1-13',
    }
  });

  digits.print("HELLO");

  // 輝度を50％設定
  digits.brightness(50);
});
