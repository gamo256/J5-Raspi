var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // 4×20のLCDオブジェクトを作成
  var lcd = new five.LCD({
    controller: "PCF8574A",
    rows: 4,
    cols: 20
  });
});
