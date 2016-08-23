var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // アノードコモンのLedオブジェクトを作成
  var led = new five.Led.RGB({
    pins:['P1-12', 'P1-32', 'P1-33'],
    isAnode: true
  });

  // LEDを点灯
  led.on();
});

