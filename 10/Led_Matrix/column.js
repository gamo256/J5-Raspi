var five = require("johnny-five");
var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Matrixオブジェクトを作成
  var matrix = new five.Led.Matrix({
    pins: {
      data: 'P1-7',
      clock: 'P1-11',
      cs: 'P1-13',
    }
  });

  // 2列目を全点灯
  matrix.column (1, 255);
});
