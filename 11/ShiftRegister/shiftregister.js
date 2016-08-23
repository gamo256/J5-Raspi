var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

// For use with 74HC595 chip

board.on("ready", function() {
  var register = new five.ShiftRegister({
    pins: {
      data: 'P1-7',
      clock: 'P1-11',
      latch: 'P1-13'
    }
  });

  var value = 0;

  setInterval(function() {
    value = value > 0x11 ? value >> 1 : 0x88;
    register.send(value);
  }, 200);
});;