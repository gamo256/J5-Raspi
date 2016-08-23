var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // P1-16(GPIO23)ピンをトグルスイッチ入力用に設定
  var toggle = new five.Switch({
    pin:'P1-16',
    type: "NC"
  });

  toggle.on("close", function() {
    console.log("closed");
  });

  toggle.on("open", function() {
    console.log("open");
  });
});