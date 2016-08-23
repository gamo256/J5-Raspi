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

  matrix.draw("G");

  // 5秒後
  this.wait(5000, function(){
    // デバイス0の表示をオフ
    matrix.off(0);
  });
  // 10秒後
  this.wait(10000, function(){
    // デバイス0の表示をオン
    matrix.on(0);
  });
});
