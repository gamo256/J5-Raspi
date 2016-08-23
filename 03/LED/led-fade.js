var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Ledオブジェクトを作成
  // P1-12(GPIO18/PWM0)ピンをLED制御用に設定
  var led = new five.Led('P1-12');

  // LEDを2000ミリ秒かけて明るさ128までフェードイン
  led.fade(128, 2000);
});
