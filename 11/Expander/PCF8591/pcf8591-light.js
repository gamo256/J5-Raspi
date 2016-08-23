var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  var virtual = new five.Board.Virtual(
    new five.Expander("PCF8591")
  );

  var light  = new five.Light({
    pin: "A0",
    board: virtual
  });

  light.on("change", function() {
    console.log(this.level);
  });
});