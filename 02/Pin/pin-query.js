var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Pinオブジェクトを作成(P1-7(GPIO4)ピンをデジタル入出力に設定)
  var pin = new five.Pin('P1-7')

  // P1-7(GPIO4)ピンの現在の状態を表示
  pin.query(function(state) {
    console.log(state);
  });
});