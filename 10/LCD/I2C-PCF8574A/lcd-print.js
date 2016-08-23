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

  // 1行5列目にカーソルを移動
  lcd.cursor(0, 4);
  // 「Hello!」と表示
  lcd.print("Hello!");
});
