var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Ledオブジェクトを作成
  var led = new five.Led.RGB({
    pins:['P1-12', 'P1-32', 'P1-33'],
    isAnode: true
  });

  // LEDを500ミリ秒間隔で点滅
  led.blink(500);

  // 10秒(10000ミリ秒)後に点滅動作を停止し、LEDをオフ(消灯)
  this.wait(10000, function() {
    led.stop().off();
  });
});
