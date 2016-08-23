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

  // 輝度を50％設定
  digits.brightness(50);
});
