var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  var led = new five.Led('P1-7');
  led.on();

  // [Ctrl]+[C]で中断したときにLEDを消灯
  this.on("exit", function() {
    led.off();
  });
});
