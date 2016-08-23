var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Ledオブジェクトを作成
  // P1-7(GPIO4)ピンをLED制御用に設定
  var led = new five.Led('P1-7');

  // LEDを500ミリ秒間隔で点滅
  led.blink(500);
});