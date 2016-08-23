var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Piezoオブジェクトを作成
  // P1-7(GPIO4)ピンを信号出力用に設定
  var piezo = new five.Piezo('P1-7');

  // 曲を再生
  piezo.play({
    // 曲の配列(第1引数:コード、第2引数:ビート)
    song: [
      ["C4", 1 / 4],
      ["D4", 1 / 2],
      [null, 1],
      ["F4", 1],
    ],
    tempo: 100
  });
});