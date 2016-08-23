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

  // ホーム(1行1列目)から「Hello！」と表示
  lcd.home().print("Hello!")
  // 5秒後
  this.wait(5000, function(){
    // 表示オフ
    lcd.off();
  });
  // 10秒後
  this.wait(10000, function(){
    // 表示オン
    lcd.on();
  });
  // 15秒後
  this.wait(14000, function(){
    // 表示クリア
    lcd.clear();
  });
});
