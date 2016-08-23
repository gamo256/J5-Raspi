var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Matrixオブジェクトを作成
  var matrix = new five.Led.Matrix({
    controller: "HT16K33",
    isBicolor: true
  });

  // デバイス1の2行3列目のドットを黄色で点灯
  matrix.led(0, 1, 2, LedControl.COLORS.YELLOW);
});
