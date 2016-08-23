var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Ledオブジェクトを作成
  var led = new five.Led.RGB(['P1-12', 'P1-32', 'P1-33']);

  // LEDを500ミリ秒間隔で点滅
  led.blink(500);
});
