var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Piezoオブジェクトを作成
  // P1-7(GPIO4)ピンを信号出力用に設定
  var piezo = new five.Piezo('P1-7');

  // 文字列表現で曲を設定
  piezo.play({
    song: "C4 D4 D4 - - - - F4 F4 F4 F4",
    beats: 1 / 4,
    tempo: 100
  });
});