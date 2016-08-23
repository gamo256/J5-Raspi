var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Matrixオブジェクトを作成
  var matrix = new five.Led.Matrix({
    controller: "HT16K33"
  });

  // デバイス0の2行目を全点灯
  matrix.row(0, 1, 255);
});
