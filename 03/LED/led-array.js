var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Ledsオブジェクトを作成
  var leds = new five.Leds(['P1-32', 'P1-33']);

  // すべてのLEDを点滅
  leds.pulse();
});
