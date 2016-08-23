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

  // ホーム(1行1列目)にカーソルを移動
  lcd.home();
  // カーソルを点滅
  lcd.blink();
  // 「Hello!」と表示
  lcd.print("Hello!");
  // 5秒後
  this.wait(5000,function(){
    // カーソルの点滅を停止
    lcd.noBlink();
  });
});
