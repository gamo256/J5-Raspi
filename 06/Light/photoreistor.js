var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // 「PCF8591」を使用するための仮想ボードを作成
  var virtual = new five.Board.Virtual(
    new five.Expander("PCF8591")
  );

  // Lightオブジェクトを作成
  // PCF8591のA0(AIN2)ピンをセンサー入力に設定
  var light = new five.Light({
    pin: "A0",
    board: virtual
  });

  // データを取得
  light.on("data", function() {
    console.log(this.level);
  });
});