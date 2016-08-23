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
    // 表示オフ
    matrix.off();
  });
  // 10秒後
  this.wait(10000, function(){
    // 表示オン
    matrix.on();
  });
});
