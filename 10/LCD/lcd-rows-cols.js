var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // 4×20のLCDオブジェクトを作成
  var lcd = new five.LCD({
    pins: ['P1-40', 'P1-38', 'P1-24', 'P1-22', 'P1-18', 'P1-16'],
    rows: 4,
    cols: 20
  });
});

