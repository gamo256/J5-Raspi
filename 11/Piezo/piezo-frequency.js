var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Piezoオブジェクトを作成
  // P1-7(GPIO4)ピンを信号出力用に設定
  var piezo = new five.Piezo('P1-7');

  // D4を1秒間再生
  piezo.frequency(587, 1000);
});