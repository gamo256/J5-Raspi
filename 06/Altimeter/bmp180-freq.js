var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // BMP180を使用するためのAltimeterオブジェクトを作成
  var alt = new five.Altimeter({
    controller: "BMP180",
    freq: 1000
  });

  // データ取得
  alt.on("change", function() {
    console.log("altimeter");
    console.log("  feet         : ", this.feet);
    console.log("  meters       : ", this.meters);
    console.log("--------------------------------------");
  });
});