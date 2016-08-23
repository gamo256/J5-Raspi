var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Digitsオブジェクトを作成
  var digits = new five.Led.Digits({
    controller: "HT16K33"
  });

  digits.print("HELLO");

  // デバイス0の輝度を50％に設定
  digits.brightness(0, 50);
});
