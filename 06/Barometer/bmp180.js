var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // BMP180を使用するためのBarometerオブジェクトを作成
  var barometer = new five.Barometer({
    controller: "BMP180"
  });

  // データ取得
  barometer.on("data", function() {
    console.log("barometer");
    console.log("  pressure     : ", this.pressure);
    console.log("--------------------------------------");
  });
});
;