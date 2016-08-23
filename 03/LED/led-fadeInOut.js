var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Ledオブジェクトを作成
  // P1-12(GPIO18/PWM0)ピンをLED制御用に設定
  var led = new five.Led('P1-12');

  // LEDを1000ミリ秒かけてフェードイン
  led.fadeIn(1000);

  // 5秒(5000ミリ秒)後に
  this.wait(5000, function() {
    // LEDを1000ミリ秒かけてフェードアウト
    led.fadeOut(1000);
  });
});
