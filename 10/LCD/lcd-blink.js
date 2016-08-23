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
