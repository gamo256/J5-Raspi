var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // 各LEDのLedオブジェクトを作成
  var ledA = new five.Led('P1-32');
  var ledB = new five.Led('P1-33');

  // Ledsオブジェクトを作成
  var leds = new five.Leds([ledA, ledB]);

  // 各LEDの明るさを設定
  ledA.brightness(20);
  ledB.brightness(255);
  // すべてLEDにパルスを出力
  leds.pulse();
});
