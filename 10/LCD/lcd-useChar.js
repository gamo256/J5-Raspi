var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // LCDオブジェクトを作成
  var lcd = new five.LCD({
    pins: ['P1-40', 'P1-38', 'P1-24', 'P1-22', 'P1-18', 'P1-16'],
  });

  // 特殊文字のハートマークをLCDキャラクタマップに登録
  lcd.useChar("heart");
  // 1行1列目にカーソルを移動
  lcd.cursor(0, 0)
  // ハートマークを表示
  lcd.print(":heart:");

  lcd.cursor(1, 0)
  // 通常の文字列と組み合わせる場合
  lcd.print("I :heart: Johnny-Five");
});
