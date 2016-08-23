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

  // LEDをオン
  led.on();

  // 5秒(5000ミリ秒)後にLEDをオフ(消灯)
  this.wait(5000, function() {
    led.off();
  });

  // 10秒(10000ミリ秒)後に現在の状態を反転(この例ではLEDオン)
  this.wait(10000, function() {
    led.toggle();
  });
});

