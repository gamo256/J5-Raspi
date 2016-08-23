var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Lightオブジェクトを作成
  // A0ピンをセンサー入力に設定
  var light = new five.Light({
    controller: "TSL2561"
  });

  // データを取得
  light.on("data", function() {
    console.log(this.level);
  });
});