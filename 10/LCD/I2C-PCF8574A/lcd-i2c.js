var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {


  var random = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 4).toUpperCase();


  // LCDオブジェクトを作成
  // コントローラ「PCF8574A」(I2Cインターフェイス)
  var lcd = new five.LCD({
    controller: "PCF8574A"
  });

  // 文字、キャラクターを表示
  lcd.useChar("heart");
  lcd.cursor(0, 0).print("Hello :heart:");
  lcd.blink();
  lcd.cursor(1, 0).print("Blinking? ");
  l.cursor(0, 10).print(random);


  setTimeout(function() {
    process.exit(0);
  }, 3000);
});
