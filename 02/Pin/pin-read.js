var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Pinオブジェクトを作成
  // P1-7(GPIO4)ピンをデジタル入出力に設定
  var pin = new five.Pin('P1-7');

  // ピンの入力値を読み取って表示
  pin.read(function(error, value) {
    console.log(value);
  });

  /* または
  five.Pin.read(pin, function(error, value) {
    console.log(value);
  });
  */
});