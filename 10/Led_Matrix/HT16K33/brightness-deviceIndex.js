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

  // 文字を表示
  matrix.draw("G");

  // デバイス0の明るさ(輝度)を50%に設定
  matrix.brightness(0, 50);
});
