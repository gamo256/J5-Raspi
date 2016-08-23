var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // LCDオブジェクトを作成
  // コントローラ「PCF8574A」(I2Cインターフェイス)
  var lcd = new five.LCD({
    controller: "PCF8574A"
  });

  // 特殊文字のハートマークをLCDキャラクタマップに登録
  lcd.useChar("heart");
  // 1行1列目にカーソルを移動
  lcd.cursor(0, 0)
  // ハートマークは表示されず「:heart:」と表示される
  lcd.print(":heart:", { dontProcessSpecials: true });
});
